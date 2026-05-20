const pinyinData = {
    shengmu: ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'],
    yunmu: ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er', 'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong'],
    zhengti: ['zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying']
};

const gameThemes = {
    fruit: {
        name: '水果',
        color: '#ff6b6b',
        items: [
            { pinyin: 'píng guǒ', emoji: '🍎', name: '苹果' },
            { pinyin: 'píng guǒ', emoji: '🍎', name: '苹果' },
            { pinyin: 'xiāng jiāo', emoji: '🍌', name: '香蕉' },
            { pinyin: 'xiāng jiāo', emoji: '🍌', name: '香蕉' },
            { pinyin: 'táo zi', emoji: '🍑', name: '桃子' },
            { pinyin: 'táo zi', emoji: '🍑', name: '桃子' },
            { pinyin: 'lí zi', emoji: '🍐', name: '梨子' },
            { pinyin: 'lí zi', emoji: '🍐', name: '梨子' },
            { pinyin: 'xī guā', emoji: '🍉', name: '西瓜' },
            { pinyin: 'xī guā', emoji: '🍉', name: '西瓜' },
            { pinyin: 'pú tao', emoji: '🍇', name: '葡萄' },
            { pinyin: 'pú tao', emoji: '🍇', name: '葡萄' }
        ]
    },
    animal: {
        name: '动物',
        color: '#4ecdc4',
        items: [
            { pinyin: 'gǒu', emoji: '🐕', name: '狗' },
            { pinyin: 'gǒu', emoji: '🐕', name: '狗' },
            { pinyin: 'māo', emoji: '🐱', name: '猫' },
            { pinyin: 'māo', emoji: '🐱', name: '猫' },
            { pinyin: 'xióng', emoji: '🐻', name: '熊' },
            { pinyin: 'xióng', emoji: '🐻', name: '熊' },
            { pinyin: 'lǎo hǔ', emoji: '🐯', name: '老虎' },
            { pinyin: 'lǎo hǔ', emoji: '🐯', name: '老虎' },
            { pinyin: 'kǒng què', emoji: '🦚', name: '孔雀' },
            { pinyin: 'kǒng què', emoji: '🦚', name: '孔雀' },
            { pinyin: 'xiǎo niǎo', emoji: '🐦', name: '小鸟' },
            { pinyin: 'xiǎo niǎo', emoji: '🐦', name: '小鸟' }
        ]
    },
    dessert: {
        name: '甜品',
        color: '#a29bfe',
        items: [
            { pinyin: 'dàn gāo', emoji: '🎂', name: '蛋糕' },
            { pinyin: 'dàn gāo', emoji: '🎂', name: '蛋糕' },
            { pinyin: 'bǐng gān', emoji: '🍪', name: '饼干' },
            { pinyin: 'bǐng gān', emoji: '🍪', name: '饼干' },
            { pinyin: 'qiǎo kè lì', emoji: '🍫', name: '巧克力' },
            { pinyin: 'qiǎo kè lì', emoji: '🍫', name: '巧克力' },
            { pinyin: 'táng guǒ', emoji: '🍬', name: '糖果' },
            { pinyin: 'táng guǒ', emoji: '🍬', name: '糖果' },
            { pinyin: 'shuǐ guǒ zhī', emoji: '🧃', name: '果汁' },
            { pinyin: 'shuǐ guǒ zhī', emoji: '🧃', name: '果汁' },
            { pinyin: 'niú nǎi', emoji: '🥛', name: '牛奶' },
            { pinyin: 'niú nǎi', emoji: '🥛', name: '牛奶' }
        ]
    }
};

let cards = [];
let flippedCards = [];
let score = 0;
let matchedPairs = 0;
const totalPairs = 6;
let currentTheme = 'fruit';

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getRandomTheme() {
    const themes = Object.keys(gameThemes);
    return themes[Math.floor(Math.random() * themes.length)];
}

function speak(text, onEndCallback) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.65;
    utterance.pitch = 1.3;
    utterance.volume = 0.85;
    
    const voices = speechSynthesis.getVoices();
    const gentleVoice = voices.find(voice => 
        (voice.name.includes('Female') && voice.lang.startsWith('zh')) ||
        voice.name.includes('Xiaoxiao') || 
        voice.name.includes('Tingting') ||
        voice.name.includes('Mei-Jia') ||
        voice.name.includes('Google 普通话') ||
        (voice.lang.startsWith('zh') && voice.gender === 'female')
    );
    
    if (gentleVoice) {
        utterance.voice = gentleVoice;
    } else if (voices.length > 0) {
        const chineseVoice = voices.find(v => v.lang.startsWith('zh'));
        if (chineseVoice) {
            utterance.voice = chineseVoice;
        }
    }
    
    if (onEndCallback) {
        utterance.onend = onEndCallback;
        utterance.onerror = onEndCallback;
    }
    
    speechSynthesis.speak(utterance);
}

function showMatchHint(emoji, pinyin, name) {
    const hint = document.getElementById('matchHint');
    hint.querySelector('.hint-emoji').textContent = emoji;
    hint.querySelector('.hint-pinyin').textContent = pinyin;
    hint.querySelector('.hint-name').textContent = name;
    hint.classList.add('show');
    
    speak(pinyin + '，' + name, () => {
        setTimeout(() => {
            hint.classList.remove('show');
        }, 300);
    });
}

function createCards() {
    currentTheme = getRandomTheme();
    const themeData = gameThemes[currentTheme];
    
    document.body.className = currentTheme + '-theme';
    
    const themeBadge = document.getElementById('themeBadge');
    if (themeBadge) {
        themeBadge.className = 'theme-badge ' + currentTheme;
        themeBadge.textContent = '🎯 ' + themeData.name + '主题';
    } else {
        const badge = document.createElement('div');
        badge.id = 'themeBadge';
        badge.className = 'theme-badge ' + currentTheme;
        badge.textContent = '🎯 ' + themeData.name + '主题';
        document.querySelector('header').insertBefore(badge, document.querySelector('.score-board'));
    }
    
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    cards = shuffle(themeData.items);
    
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.index = index;
        cardElement.dataset.pinyin = card.pinyin;
        cardElement.dataset.name = card.name;
        cardElement.dataset.emoji = card.emoji;
        
        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front ${currentTheme}">
                    <span class="question">❓</span>
                </div>
                <div class="card-back ${currentTheme}">
                    <span class="emoji">${card.emoji}</span>
                    <span class="pinyin">${card.pinyin}</span>
                    <span class="name">${card.name}</span>
                </div>
            </div>
        `;
        
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(e) {
    const card = e.currentTarget;
    const cardInner = card.querySelector('.card-inner');
    
    if (cardInner.classList.contains('flipped') || flippedCards.length >= 2) {
        return;
    }
    
    cardInner.classList.add('flipped');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.pinyin === card2.dataset.pinyin) {
        setTimeout(() => {
            showMatchHint(card1.dataset.emoji, card1.dataset.pinyin, card1.dataset.name);
            
            card1.style.opacity = '0';
            card2.style.opacity = '0';
            card1.style.pointerEvents = 'none';
            card2.style.pointerEvents = 'none';
            
            matchedPairs++;
            score += 10;
            updateScore();
            
            if (matchedPairs === totalPairs) {
                setTimeout(() => {
                    showWinModal();
                }, 1000);
            }
        }, 500);
    } else {
        setTimeout(() => {
            card1.querySelector('.card-inner').classList.remove('flipped');
            card2.querySelector('.card-inner').classList.remove('flipped');
        }, 800);
    }
    
    flippedCards = [];
}

function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('matches').textContent = matchedPairs;
}

function showWinModal() {
    document.getElementById('finalScore').textContent = score;
    document.getElementById('winModal').style.display = 'flex';
    speak('恭喜完成！你太棒了！');
}

function restartGame() {
    score = 0;
    matchedPairs = 0;
    flippedCards = [];
    speechSynthesis.cancel();
    updateScore();
    document.getElementById('winModal').style.display = 'none';
    createCards();
}

function showPinyinHint(pinyin) {
    const hint = document.getElementById('pinyinHint');
    hint.querySelector('.hint-pinyin-text').textContent = pinyin;
    hint.classList.add('show');
    
    speak(pinyin, () => {
        setTimeout(() => {
            hint.classList.remove('show');
        }, 300);
    });
}

function createPinyinCards(type) {
    const pinyinBoard = document.getElementById('pinyinBoard');
    pinyinBoard.innerHTML = '';
    
    const data = pinyinData[type];
    data.forEach(pinyin => {
        const card = document.createElement('div');
        card.className = `pinyin-card ${type}`;
        card.textContent = pinyin;
        card.addEventListener('click', () => showPinyinHint(pinyin));
        pinyinBoard.appendChild(card);
    });
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));
    document.getElementById(`${tabName}Tab`).classList.add('active');
    
    const gameSection = document.getElementById('gameSection');
    const pinyinSection = document.getElementById('pinyinSection');
    
    if (tabName === 'game') {
        gameSection.style.display = 'block';
        pinyinSection.style.display = 'none';
    } else {
        gameSection.style.display = 'none';
        pinyinSection.style.display = 'block';
    }
}

function switchPinyinTab(tabName) {
    const tabs = document.querySelectorAll('.pinyin-tab');
    tabs.forEach(t => t.classList.remove('active'));
    document.getElementById(`${tabName}Tab`).classList.add('active');
    createPinyinCards(tabName);
}

document.getElementById('restartBtn').addEventListener('click', restartGame);
document.getElementById('playAgain').addEventListener('click', restartGame);

document.getElementById('gameTab').addEventListener('click', () => switchTab('game'));
document.getElementById('pinyinTab').addEventListener('click', () => switchTab('pinyin'));

document.getElementById('shengmuTab').addEventListener('click', () => switchPinyinTab('shengmu'));
document.getElementById('yunmuTab').addEventListener('click', () => switchPinyinTab('yunmu'));
document.getElementById('zhengtiTab').addEventListener('click', () => switchPinyinTab('zhengti'));

document.addEventListener('DOMContentLoaded', () => {
    speechSynthesis.getVoices();
    createCards();
    createPinyinCards('shengmu');
});
