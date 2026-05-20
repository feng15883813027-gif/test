const pinyinData = {
    shengmu: ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'],
    yunmu: ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er', 'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong'],
    zhengti: ['zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying']
};

// 拼音读音映射表
const pinyinPronunciation = {
    // 声母
    'b': '波', 'p': '坡', 'm': '摸', 'f': '佛',
    'd': '得', 't': '特', 'n': '讷', 'l': '勒',
    'g': '哥', 'k': '科', 'h': '喝',
    'j': '鸡', 'q': '七', 'x': '西',
    'zh': '知', 'ch': '吃', 'sh': '诗', 'r': '日',
    'z': '资', 'c': '雌', 's': '思',
    'y': '衣', 'w': '乌',
    // 韵母
    'a': '啊', 'o': '喔', 'e': '鹅', 'i': '衣', 'u': '乌', 'v': '迂',
    'ü': '迂', 'ai': '哀', 'ei': '诶', 'ui': '威', 'ao': '奥', 'ou': '欧',
    'iu': '优', 'ie': '耶', 'üe': '约', 'er': '耳',
    'an': '安', 'en': '恩', 'in': '因', 'un': '温', 'ün': '晕',
    'ang': '昂', 'eng': '亨', 'ing': '英', 'ong': '翁',
    // 整体认读音节
    'zhi': '知', 'chi': '吃', 'shi': '诗', 'ri': '日',
    'zi': '资', 'ci': '雌', 'si': '思',
    'yi': '衣', 'wu': '乌', 'yu': '鱼', 'ye': '耶', 'yue': '约',
    'yuan': '冤', 'yin': '因', 'yun': '晕', 'ying': '英'
};

function readPy(str) {
    // 根据拼音读音映射表朗读
    let pronunciation = pinyinPronunciation[str] || str;
    let u = new SpeechSynthesisUtterance(pronunciation);
    u.lang = "zh-CN";
    speechSynthesis.speak(u);
}

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
        color: '#f9ca24',
        items: [
            { pinyin: 'dàn gāo', emoji: '🎂', name: '蛋糕' },
            { pinyin: 'dàn gāo', emoji: '🎂', name: '蛋糕' },
            { pinyin: 'bīng qí lín', emoji: '🍦', name: '冰淇淋' },
            { pinyin: 'bīng qí lín', emoji: '🍦', name: '冰淇淋' },
            { pinyin: 'qiǎo kè lì', emoji: '🍫', name: '巧克力' },
            { pinyin: 'qiǎo kè lì', emoji: '🍫', name: '巧克力' },
            { pinyin: 'bǐng gān', emoji: '🍪', name: '饼干' },
            { pinyin: 'bǐng gān', emoji: '🍪', name: '饼干' },
            { pinyin: 'táng guǒ', emoji: '🍬', name: '糖果' },
            { pinyin: 'táng guǒ', emoji: '🍬', name: '糖果' },
            { pinyin: 'miàn bāo', emoji: '🍞', name: '面包' },
            { pinyin: 'miàn bāo', emoji: '🍞', name: '面包' }
        ]
    }
};

let currentTheme = 'fruit';
let flippedCards = [];
let matchedPairs = 0;
let gameCards = [];
let isProcessing = false;

function initGame() {
    const themeKeys = Object.keys(gameThemes);
    currentTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
    const theme = gameThemes[currentTheme];
    
    gameCards = [...theme.items];
    gameCards.sort(() => Math.random() - 0.5);
    
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    
    gameCards.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.dataset.pinyin = item.pinyin;
        card.dataset.emoji = item.emoji;
        card.dataset.name = item.name;
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <span class="question">❓</span>
                </div>
                <div class="card-back">
                    <span class="emoji">${item.emoji}</span>
                    <span class="pinyin">${item.pinyin}</span>
                    <span class="name">${item.name}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
    
    matchedPairs = 0;
    flippedCards = [];
    isProcessing = false;
    document.getElementById('score').textContent = '0';
    document.getElementById('matches').textContent = '0';
}

function flipCard(card) {
    if (isProcessing || card.classList.contains('matched')) {
        return;
    }
    
    const cardInner = card.querySelector('.card-inner');
    if (!cardInner || cardInner.classList.contains('flipped')) {
        return;
    }
    
    cardInner.classList.add('flipped');
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        isProcessing = true;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const emoji1 = card1.dataset.emoji;
    const emoji2 = card2.dataset.emoji;
    
    if (emoji1 === emoji2) {
        // 匹配成功
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            
            // 保持卡片可见但降低透明度
            card1.style.opacity = '0.3';
            card2.style.opacity = '0.3';
            
            matchedPairs++;
            document.getElementById('score').textContent = matchedPairs * 10;
            document.getElementById('matches').textContent = matchedPairs;
            
            // 显示匹配成功的弹窗并朗读
            showMatchModal(card1.dataset);
            
            flippedCards = [];
            isProcessing = false;
            
            if (matchedPairs === gameCards.length / 2) {
                setTimeout(showWinModal, 1000);
            }
        }, 500);
    } else {
        setTimeout(() => {
            card1.querySelector('.card-inner').classList.remove('flipped');
            card2.querySelector('.card-inner').classList.remove('flipped');
            flippedCards = [];
            isProcessing = false;
        }, 1000);
    }
}

function showMatchModal(cardData) {
    const modal = document.getElementById('matchHint');
    const hintEmoji = modal.querySelector('.hint-emoji');
    const hintPinyin = modal.querySelector('.hint-pinyin');
    const hintName = modal.querySelector('.hint-name');
    
    hintEmoji.textContent = cardData.emoji;
    hintPinyin.textContent = cardData.pinyin;
    hintName.textContent = cardData.name;
    
    modal.style.display = 'block';
    
    // 朗读拼音和文字
    const textToRead = `${cardData.pinyin}，${cardData.name}`;
    speakText(textToRead, () => {
        // 朗读完成后关闭弹窗
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    });
}

function speakText(text, callback) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.65;
    utterance.pitch = 1.3;
    utterance.volume = 0.85;
    
    // 尝试找到温柔的中文女声
    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => 
        v.lang.includes('zh') && 
        (v.name.includes('Xiaoxiao') || v.name.includes('Tingting') || v.name.includes('Yaoyao'))
    );
    
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    } else {
        const chineseVoice = voices.find(v => v.lang.includes('zh'));
        if (chineseVoice) {
            utterance.voice = chineseVoice;
        }
    }
    
    if (callback) {
        utterance.onend = callback;
    }
    
    speechSynthesis.speak(utterance);
}

function showWinModal() {
    const winModal = document.getElementById('winModal');
    const finalScore = document.getElementById('finalScore');
    finalScore.textContent = document.getElementById('score').textContent;
    winModal.style.display = 'flex';
    speakText('恭喜你完成了所有配对！你真棒！');
}

function restartGame() {
    document.getElementById('matchHint').style.display = 'none';
    document.getElementById('winModal').style.display = 'none';
    initGame();
}

// 拼音学习功能
function initPinyinLearning() {
    // 初始显示声母
    showPinyinTab('shengmu');
    
    // Tab切换事件
    document.getElementById('shengmuTab').addEventListener('click', () => showPinyinTab('shengmu'));
    document.getElementById('yunmuTab').addEventListener('click', () => showPinyinTab('yunmu'));
    document.getElementById('zhengtiTab').addEventListener('click', () => showPinyinTab('zhengti'));
}

function showPinyinTab(tab) {
    const pinyinBoard = document.getElementById('pinyinBoard');
    pinyinBoard.innerHTML = '';
    
    // 切换tab样式
    document.querySelectorAll('.pinyin-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`${tab}Tab`).classList.add('active');
    
    // 根据tab显示对应的拼音
    let data = [];
    if (tab === 'shengmu') {
        data = pinyinData.shengmu;
    } else if (tab === 'yunmu') {
        data = pinyinData.yunmu;
    } else if (tab === 'zhengti') {
        data = pinyinData.zhengti;
    }
    
    data.forEach(py => {
        const btn = createPinyinButton(py, tab);
        pinyinBoard.appendChild(btn);
    });
}

function createPinyinButton(pinyin, type) {
    const btn = document.createElement('button');
    btn.className = `pinyin-card ${type}`;
    btn.textContent = pinyin;
    btn.addEventListener('click', () => readPy(pinyin));
    return btn;
}

// 贪吃蛇游戏
class SnakeGame {
    constructor() {
        this.board = document.getElementById('snakeBoard');
        this.scoreElement = document.getElementById('snakeScore');
        this.lengthElement = document.getElementById('snakeLength');
        this.boardSize = 15;
        this.snake = [{x: 7, y: 7}];
        this.food = null;
        this.direction = 'right';
        this.score = 0;
        this.gameLoop = null;
        this.isPaused = false;
        this.fruits = ['🍎', '🍊', '🍋', '🍇', '🍓', '🍑', '🍒', '🥝', '🍌', '🍉', '🍍', '🥭'];
        this.currentFruit = this.fruits[0];
        
        this.initBoard();
        this.spawnFood();
        this.render();
        this.setupControls();
    }
    
    initBoard() {
        this.board.innerHTML = '';
        for (let i = 0; i < this.boardSize * this.boardSize; i++) {
            const cell = document.createElement('div');
            cell.className = 'snake-cell';
            this.board.appendChild(cell);
        }
    }
    
    setupControls() {
        document.addEventListener('keydown', (e) => {
            if (this.isPaused) return;
            
            switch(e.key) {
                case 'ArrowUp':
                    if (this.direction !== 'down') this.direction = 'up';
                    this.move();
                    break;
                case 'ArrowDown':
                    if (this.direction !== 'up') this.direction = 'down';
                    this.move();
                    break;
                case 'ArrowLeft':
                    if (this.direction !== 'right') this.direction = 'left';
                    this.move();
                    break;
                case 'ArrowRight':
                    if (this.direction !== 'left') this.direction = 'right';
                    this.move();
                    break;
            }
        });
        
        // 屏幕按钮控制
        document.getElementById('upBtn').addEventListener('click', () => {
            if (this.direction !== 'down') {
                this.direction = 'up';
                this.move();
            }
        });
        document.getElementById('downBtn').addEventListener('click', () => {
            if (this.direction !== 'up') {
                this.direction = 'down';
                this.move();
            }
        });
        document.getElementById('leftBtn').addEventListener('click', () => {
            if (this.direction !== 'right') {
                this.direction = 'left';
                this.move();
            }
        });
        document.getElementById('rightBtn').addEventListener('click', () => {
            if (this.direction !== 'left') {
                this.direction = 'right';
                this.move();
            }
        });
    }
    
    move() {
        const head = {...this.snake[0]};
        
        switch(this.direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }
        
        // 检查碰撞
        if (head.x < 0 || head.x >= this.boardSize || head.y < 0 || head.y >= this.boardSize) {
            this.gameOver();
            return;
        }
        
        // 检查是否撞到自己
        if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            this.gameOver();
            return;
        }
        
        this.snake.unshift(head);
        
        // 检查是否吃到食物
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.scoreElement.textContent = this.score;
            this.spawnFood();
        } else {
            this.snake.pop();
        }
        
        this.render();
    }
    
    spawnFood() {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * this.boardSize),
                y: Math.floor(Math.random() * this.boardSize)
            };
        } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        
        this.food = newFood;
        this.currentFruit = this.fruits[Math.floor(Math.random() * this.fruits.length)];
    }
    
    render() {
        const cells = this.board.querySelectorAll('.snake-cell');
        cells.forEach(cell => {
            cell.className = 'snake-cell';
            cell.textContent = '';
        });
        
        // 渲染蛇身
        this.snake.forEach((segment, index) => {
            const cellIndex = segment.y * this.boardSize + segment.x;
            const cell = cells[cellIndex];
            if (index === 0) {
                cell.classList.add('snake-head');
            } else {
                cell.classList.add('snake');
            }
        });
        
        // 渲染食物
        if (this.food) {
            const foodIndex = this.food.y * this.boardSize + this.food.x;
            const foodCell = cells[foodIndex];
            foodCell.classList.add('food');
            foodCell.textContent = this.currentFruit;
        }
    }
    
    reset() {
        this.snake = [{x: 7, y: 7}];
        this.direction = 'right';
        this.score = 0;
        this.scoreElement.textContent = '0';
        this.isPaused = false;
        this.spawnFood();
        this.render();
    }
    
    gameOver() {
        alert(`游戏结束！得分：${this.score}`);
        this.reset();
    }
}

// 数数游戏（喂小猫吃鱼）
class CountingGame {
    constructor() {
        this.targetNumber = 0;
        this.currentCount = 0;
        this.fishPool = document.getElementById('fishPool');
        this.fishBowl = document.getElementById('fishBowl');
        this.targetDisplay = document.getElementById('targetNumber');
        this.currentDisplay = document.getElementById('currentCount');
        this.showTarget = document.getElementById('showTarget');
        this.resultModal = document.getElementById('countingResult');
        this.catMouth = document.getElementById('catMouth');
        this.catTargetArea = document.getElementById('catTargetArea');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupDragAndDrop();
        this.startNewRound();
    }
    
    setupEventListeners() {
        document.getElementById('submitFish').addEventListener('click', () => this.checkAnswer());
        document.getElementById('resetCounting').addEventListener('click', () => this.startNewRound());
        document.getElementById('resultRestartBtn').addEventListener('click', () => {
            this.resultModal.style.display = 'none';
            this.startNewRound();
        });
    }
    
    startNewRound() {
        this.targetNumber = Math.floor(Math.random() * 15) + 1;
        this.currentCount = 0;
        this.targetDisplay.textContent = this.targetNumber;
        this.currentDisplay.textContent = this.currentCount;
        this.showTarget.textContent = this.targetNumber;
        this.fishBowl.innerHTML = '';
        this.resultModal.style.display = 'none';
        
        // 语音播报目标数量
        setTimeout(() => {
            this.speak(`小猫想要吃${this.targetNumber}条鱼，请拖动小鱼到小猫嘴巴里！`);
        }, 500);
        
        this.renderFishPool();
    }
    
    renderFishPool() {
        this.fishPool.innerHTML = '';
        for (let i = 0; i < 15; i++) {
            const fish = document.createElement('div');
            fish.className = 'draggable-fish';
            fish.textContent = '🐟';
            fish.draggable = true;
            fish.dataset.fishId = i;
            
            fish.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('fishId', i);
                fish.style.opacity = '0.5';
            });
            
            fish.addEventListener('dragend', () => {
                fish.style.opacity = '1';
            });
            
            this.fishPool.appendChild(fish);
        }
    }
    
    setupDragAndDrop() {
        // 小猫嘴巴拖放区域
        this.catMouth.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.catMouth.style.transform = 'scale(1.4)';
        });
        
        this.catMouth.addEventListener('dragleave', () => {
            this.catMouth.style.transform = 'scale(1)';
        });
        
        this.catMouth.addEventListener('drop', (e) => {
            e.preventDefault();
            this.catMouth.style.transform = 'scale(1)';
            
            const fishId = e.dataTransfer.getData('fishId');
            const fish = this.fishPool.querySelector(`[data-fish-id="${fishId}"]`);
            
            if (fish && !fish.classList.contains('fed')) {
                this.feedFish(fish);
            }
        });
        
        // 小猫目标区域拖放
        this.catTargetArea.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        this.catTargetArea.addEventListener('drop', (e) => {
            e.preventDefault();
            
            const fishId = e.dataTransfer.getData('fishId');
            const fish = this.fishPool.querySelector(`[data-fish-id="${fishId}"]`);
            
            if (fish && !fish.classList.contains('fed')) {
                this.feedFish(fish);
            }
        });
    }
    
    feedFish(fish) {
        if (this.currentCount >= 15) return;
        
        fish.classList.add('fed');
        fish.style.opacity = '0.3';
        fish.draggable = false;
        
        this.currentCount++;
        this.currentDisplay.textContent = this.currentCount;
        
        // 添加小鱼到喂食区域
        const fedFish = document.createElement('div');
        fedFish.className = 'fish-item';
        fedFish.textContent = '🐟';
        this.fishBowl.appendChild(fedFish);
        
        // 播放喂食音效（使用语音）
        this.speak(this.currentCount + '条鱼');
    }
    
    checkAnswer() {
        const isCorrect = this.currentCount === this.targetNumber;
        const resultContent = this.resultModal.querySelector('.result-content');
        const resultEmoji = this.resultModal.querySelector('.result-emoji');
        const resultText = this.resultModal.querySelector('.result-text');
        const restartBtn = this.resultModal.querySelector('.result-restart-btn');
        
        if (isCorrect) {
            resultEmoji.textContent = '🎉';
            resultText.textContent = `正确！小猫吃到了${this.targetNumber}条鱼！你真棒！`;
            this.speak(`正确！${this.targetNumber}条鱼！你真棒！`);
            restartBtn.style.display = 'none';
        } else {
            resultEmoji.textContent = '😊';
            resultText.textContent = `不对哦，应该是${this.targetNumber}条鱼，你喂了${this.currentCount}条，再试试吧！`;
            this.speak(`不对哦，应该是${this.targetNumber}条鱼`);
            restartBtn.style.display = 'inline-block';
        }
        
        this.resultModal.style.display = 'flex';
        
        // 3秒后自动开始新一轮（如果答对）
        if (isCorrect) {
            setTimeout(() => {
                this.resultModal.style.display = 'none';
                this.startNewRound();
            }, 3000);
        }
    }
    
    speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        speechSynthesis.speak(utterance);
    }
}

// 英语学习功能
class EnglishLearning {
    constructor() {
        this.words = [];
        this.wordsContainer = document.getElementById('englishWords');
        this.emptyState = document.getElementById('englishEmpty');
        this.fileInput = document.getElementById('wordFile');
        this.uploadBtn = document.getElementById('uploadWordBtn');
        
        // 常见英语单词中文翻译映射表
        this.chineseMap = {
            'apple': '苹果', 'banana': '香蕉', 'orange': '橙子', 'grape': '葡萄',
            'strawberry': '草莓', 'watermelon': '西瓜', 'peach': '桃子', 'pear': '梨',
            'cat': '猫', 'dog': '狗', 'bird': '鸟', 'fish': '鱼', 'rabbit': '兔子',
            'bear': '熊', 'elephant': '大象', 'giraffe': '长颈鹿', 'lion': '狮子',
            'tiger': '老虎', 'monkey': '猴子', 'butterfly': '蝴蝶', 'flower': '花',
            'tree': '树', 'sun': '太阳', 'moon': '月亮', 'star': '星星',
            'book': '书', 'pencil': '铅笔', 'pen': '钢笔', 'eraser': '橡皮',
            'car': '汽车', 'bus': '公共汽车', 'plane': '飞机', 'train': '火车',
            'boat': '船', 'ball': '球', 'cake': '蛋糕', 'ice cream': '冰淇淋',
            'candy': '糖果', 'milk': '牛奶', 'cookie': '饼干', 'bread': '面包',
            'phone': '电话', 'computer': '电脑', 'house': '房子', 'door': '门',
            'window': '窗户', 'hat': '帽子', 'shoe': '鞋子', 'shirt': '衬衫',
            'dress': '裙子', 'cup': '杯子', 'spoon': '勺子', 'fork': '叉子',
            'knife': '刀', 'hand': '手', 'foot': '脚', 'eye': '眼睛',
            'nose': '鼻子', 'mouth': '嘴巴', 'ear': '耳朵', 'red': '红色',
            'blue': '蓝色', 'green': '绿色', 'yellow': '黄色', 'purple': '紫色',
            'happy': '快乐', 'smile': '微笑', 'love': '爱', 'family': '家庭',
            'friend': '朋友', 'school': '学校', 'teacher': '老师', 'student': '学生',
            'music': '音乐', 'dance': '舞蹈', 'play': '玩', 'run': '跑',
            'jump': '跳', 'walk': '走', 'eat': '吃', 'drink': '喝',
            'sleep': '睡觉', 'morning': '早上', 'afternoon': '下午', 'evening': '晚上',
            'today': '今天', 'tomorrow': '明天', 'yesterday': '昨天', 'week': '星期',
            'monday': '星期一', 'tuesday': '星期二', 'wednesday': '星期三',
            'thursday': '星期四', 'friday': '星期五', 'saturday': '星期六', 'sunday': '星期日',
            'one': '一', 'two': '二', 'three': '三', 'four': '四', 'five': '五',
            'six': '六', 'seven': '七', 'eight': '八', 'nine': '九', 'ten': '十',
            'big': '大', 'small': '小', 'long': '长', 'short': '短', 'tall': '高',
            'hot': '热', 'cold': '冷', 'good': '好', 'bad': '坏', 'new': '新',
            'old': '旧', 'young': '年轻', 'beautiful': '美丽', 'ugly': '丑陋',
            'fast': '快', 'slow': '慢', 'easy': '容易', 'hard': '困难',
            'yes': '是', 'no': '不', 'please': '请', 'thank you': '谢谢',
            'hello': '你好', 'goodbye': '再见', 'sorry': '对不起', 'excuse me': '打扰一下'
        };
        
        this.init();
    }
    
    init() {
        this.uploadBtn.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        this.loadSampleWords();
    }
    
    loadSampleWords() {
        // 默认加载一些示例单词
        this.words = [
            { word: 'apple', image: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?w=300&h=300&fit=crop', phonetic: '/ˈæp.əl/', chinese: '苹果' },
            { word: 'banana', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300&h=300&fit=crop', phonetic: '/bəˈnæn.ə/', chinese: '香蕉' },
            { word: 'cat', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop', phonetic: '/kæt/', chinese: '猫' },
            { word: 'dog', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=300&fit=crop', phonetic: '/dɒɡ/', chinese: '狗' },
            { word: 'elephant', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=300&h=300&fit=crop', phonetic: '/ˈel.ɪ.fənt/', chinese: '大象' },
            { word: 'fish', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=300&h=300&fit=crop', phonetic: '/fɪʃ/', chinese: '鱼' }
        ];
        this.renderWords();
    }
    
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                this.parseWords(content);
            } catch (error) {
                alert('文件格式错误，请检查文件内容');
            }
        };
        reader.readAsText(file);
    }
    
    parseWords(content) {
        const lines = content.trim().split('\n');
        this.words = [];
        
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;
            
            // 支持格式：单词 或 单词,中文 或 单词,中文,图片URL
            const parts = line.split(',');
            const word = parts[0].trim();
            // 如果没有提供中文，从映射表中自动获取
            const chinese = parts[1] ? parts[1].trim() : (this.chineseMap[word.toLowerCase()] || '');
            const image = parts[2] ? parts[2].trim() : this.getImageForWord(word);
            
            this.words.push({
                word: word,
                image: image,
                phonetic: '',
                chinese: chinese
            });
        });
        
        this.renderWords();
    }
    
    getImageForWord(word) {
        // 使用网络搜索获取与单词相关的图片
        // 使用picsum.photos的seed功能，根据单词生成固定的相关图片
        return `https://picsum.photos/seed/${encodeURIComponent(word)}/300/300`;
    }
    
    generateWordImage(word) {
        // 备用方法：使用Canvas生成包含单词的图片
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        
        const colors = [
            ['#ffecd2', '#fcb69f'],
            ['#a8edea', '#fed6e3'],
            ['#ffeaa7', '#fab1a0'],
            ['#dfe6e9', '#74b9ff'],
            ['#fd79a8', '#a29bfe'],
            ['#81ecec', '#55efc4']
        ];
        const colorSet = colors[Math.floor(Math.random() * colors.length)];
        const gradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
        gradient.addColorStop(0, colorSet[0]);
        gradient.addColorStop(1, colorSet[1]);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 300);
        
        for (let i = 0; i < 8; i++) {
            const x = Math.random() * 300;
            const y = Math.random() * 300;
            const r = Math.random() * 30 + 10;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
        }
        
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const fontSize = Math.min(48, Math.max(24, 300 / (word.length + 2)));
        ctx.font = `bold ${fontSize}px 'Comic Sans MS', sans-serif`;
        ctx.fillText(word.toUpperCase(), 150, 150);
        
        return canvas.toDataURL('image/png');
    }
    
    renderWords() {
        if (this.words.length === 0) {
            this.wordsContainer.style.display = 'none';
            this.emptyState.style.display = 'block';
            return;
        }
        
        this.emptyState.style.display = 'none';
        this.wordsContainer.style.display = 'grid';
        this.wordsContainer.innerHTML = '';
        
        this.words.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'english-card';
            card.innerHTML = `
                <div class="english-image">
                    <img src="${item.image}" alt="${item.word}" onerror="this.src='https://via.placeholder.com/300x300/f093fb/ffffff?text=${encodeURIComponent(item.word)}'">
                </div>
                <div class="english-word-info">
                    <h3 class="english-word">${item.word}</h3>
                    ${item.phonetic ? `<p class="english-phonetic">${item.phonetic}</p>` : ''}
                    ${item.chinese ? `<p class="english-chinese">${item.chinese}</p>` : ''}
                    <button class="speak-btn" data-word="${item.word}" data-chinese="${item.chinese || ''}">🔊 朗读</button>
                </div>
            `;
            
            const speakBtn = card.querySelector('.speak-btn');
            speakBtn.addEventListener('click', () => this.speakWord(item.word, item.chinese));
            
            this.wordsContainer.appendChild(card);
        });
    }
    
    speakWord(word, chinese) {
        // 先读英文
        const englishUtterance = new SpeechSynthesisUtterance(word);
        englishUtterance.lang = 'en-US';
        englishUtterance.rate = 0.8;
        englishUtterance.pitch = 1.2;
        
        // 尝试找到英文语音
        const voices = speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.includes('en'));
        if (englishVoice) {
            englishUtterance.voice = englishVoice;
        }
        
        // 英文读完后读中文
        englishUtterance.onend = () => {
            if (chinese) {
                const chineseUtterance = new SpeechSynthesisUtterance(chinese);
                chineseUtterance.lang = 'zh-CN';
                chineseUtterance.rate = 0.8;
                chineseUtterance.pitch = 1.3;
                
                // 尝试找到中文语音
                const chineseVoice = voices.find(v => v.lang.includes('zh'));
                if (chineseVoice) {
                    chineseUtterance.voice = chineseVoice;
                }
                
                speechSynthesis.speak(chineseUtterance);
            }
        };
        
        speechSynthesis.speak(englishUtterance);
    }
}

// 页面切换功能
function switchTab(tabName) {
    const homeSection = document.getElementById('homeSection');
    const gameSection = document.getElementById('gameSection');
    const pinyinSection = document.getElementById('pinyinSection');
    const snakeSection = document.getElementById('snakeSection');
    const countingSection = document.getElementById('countingSection');
    const englishSection = document.getElementById('englishSection');
    
    homeSection.style.display = 'none';
    gameSection.style.display = 'none';
    pinyinSection.style.display = 'none';
    snakeSection.style.display = 'none';
    countingSection.style.display = 'none';
    englishSection.style.display = 'none';
    
    if (tabName === 'home') {
        homeSection.style.display = 'block';
    } else if (tabName === 'game') {
        gameSection.style.display = 'block';
        restartGame();
    } else if (tabName === 'pinyin') {
        pinyinSection.style.display = 'block';
    } else if (tabName === 'snake') {
        snakeSection.style.display = 'block';
        if (!window.snakeGame) {
            window.snakeGame = new SnakeGame();
        }
    } else if (tabName === 'counting') {
        countingSection.style.display = 'block';
        if (!window.countingGame) {
            window.countingGame = new CountingGame();
        }
    } else if (tabName === 'english') {
        englishSection.style.display = 'block';
        if (!window.englishLearning) {
            window.englishLearning = new EnglishLearning();
        }
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initPinyinLearning();
    
    // 首页卡片点击事件
    document.getElementById('homeGame').addEventListener('click', () => switchTab('game'));
    document.getElementById('homePinyin').addEventListener('click', () => switchTab('pinyin'));
    document.getElementById('homeSnake').addEventListener('click', () => switchTab('snake'));
    document.getElementById('homeCounting').addEventListener('click', () => switchTab('counting'));
    document.getElementById('homeEnglish').addEventListener('click', () => switchTab('english'));
    
    // 返回首页按钮事件
    document.getElementById('backHome').addEventListener('click', () => switchTab('home'));
    document.getElementById('backHome2').addEventListener('click', () => switchTab('home'));
    document.getElementById('backHome3').addEventListener('click', () => switchTab('home'));
    document.getElementById('backHome4').addEventListener('click', () => switchTab('home'));
    document.getElementById('backHome5').addEventListener('click', () => switchTab('home'));
});
