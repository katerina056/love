// ============================================
// 50 ПРИЧИН — МЕНЯЙ ТЕКСТ ПОД СЕБЯ!
// ============================================
const reasons = [
    // 1-10
    "За то, что ты красивый❤️",
    "За то, что ты всегда находишь время для меня ❤️",
    "За то, как ты говоришь со мной❤️",
    "За твою заботу обо мне❤️",
    "За то, что готов защищать меня❤️",
    "За твоё терпение ко мне❤️",
    "За твой голос, который я готов слушать вечно❤️",
    "За то, что ты умеешь меня успокоить ❤️",
    "За то, что ты котёнок❤️",
    "За твою поддержку в любой ситуации❤️",
    // 11-20
    "За твою доброту ко всем вокруг❤️",
    "За то, что ты даришь мне своё время ❤️",
    "За твои сообщения утром❤️",
    "За то, как ты называешь меня❤️",
    "За то, что делаешь меня счастливой❤️",
    "За твою честность❤️",
    "За то, что ты веришь в меня❤️",
    "За твою нежность❤️",
    "За то, что ты самый родной человек ❤️",
    "За твою страсть к жизни❤️",
    // 21-30
    "За то, что ты делаешь меня лучше❤️",
    "За то, что можешь поднять мне настроение❤️",
    "За то, что ты милый❤️",
    "За твою силу духа❤️",
    "За то, что с тобой я чувствую себя дома❤️",
    "За то, что ты никогда меня не осуждаешь ❤️",
    "За твою искренность❤️",
    "За то, что ты принимаешь меня такой, какая я есть❤️",
    "За то, что ты всегда находишь способ меня порадовать ❤️",
    "За то, что ты всегда говоришь мне добрые слова ❤️",
    // 31-40
    "За твою мудрость❤️",
    "За то, что ты умеешь слушать❤️",
    "За то, что ты бережёшь мои чувства ❤️",
    "За твою увлечённость❤️",
    "За то, что ты моя лучшая поддержка❤️",
    "За то, как ты скучаешь по мне ❤️",
    "За твою верность❤️",
    "За то, что ты делаешь мою жизнь ярче ❤️",
    "За твою заботу❤️",
    "За то, что ты ласковый❤️",
    // 41-50
    "За то, что ты никогда не повышаешь на меня голос ❤️",
    "За твою целеустремлённость❤️",
    "За то, что ты всегда находишь нужные слова❤️",
    "За то, что ты помнишь мои любимые цветы ❤️",
    "За то, что ты умеешь прощать❤️",
    "За то, как ты заботишься о близких❤",
    "За то, что ты веришь в нас❤️",
    "За то, как ты говоришь «я тебя люблю»❤️",
    "За то, что ты моя самая большая любовь❤️",
    "За то, что ты просто есть у меня ❤️"
];

// ============================================
// ТЕКСТ СКРЫТОГО ПИСЬМА — МЕНЯЙ ПОД СЕБЯ!
// ============================================
const letterContent =
`Мой любимый котёнок❤️
Я знаю, что ты сейчас далеко и у тебя много дел.
Знаю, что иногда дни тяжёлые, а мысли — не о простом.
Эти 50 причин — маленькая попытка напомнить тебе,
что я тебя люблю и жду нашей с тобой встречи.
Мы с тобой должы быть сильными и справиться с расстоянием.
А я буду рядом — даже на расстоянии.
Когда мы встретимся, я обниму тебя так крепко,
что ни одна разлука больше не страшна.
Люблю тебя очень очень сильно коть❤️`;

// ============================================
// ДАННЫЕ
// ============================================
const allEmojis = ['❤️','💖','💕','💗','💝','💘','🌸','✨','🌹','💫'];
const memoryPairs = ['❤️','💖','💕','💗','💝','💘'];

// ============================================
// СОСТОЯНИЕ
// ============================================
let currentReason = 0;
let isAnimating = false;

// ============================================
// ЭЛЕМЕНТЫ
// ============================================
const startScreen = document.getElementById('startScreen');
const reasonsScreen = document.getElementById('reasonsScreen');
const letterScreen = document.getElementById('letterScreen');
const finalScreen = document.getElementById('finalScreen');
const game1 = document.getElementById('game1');
const game2 = document.getElementById('game2');
const game3 = document.getElementById('game3');
const game4 = document.getElementById('game4');
const game5 = document.getElementById('game5');

const startBtn = document.getElementById('startBtn');
const finalRestart = document.getElementById('finalRestart');
const letterBtn = document.getElementById('letterBtn');
const reasonWrap = document.getElementById('reasonWrap');
const cardNumber = document.getElementById('cardNumber');
const cardText = document.getElementById('cardText');
const progressFill = document.getElementById('progressFill');
const heartsBg = document.getElementById('heartsBg');
const tapLeft = document.getElementById('tapLeft');
const tapRight = document.getElementById('tapRight');
const letterText = document.getElementById('letterText');

// ============================================
// ПЕРЕКЛЮЧЕНИЕ ЭКРАНОВ
// ============================================
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// ============================================
// ФОН: ЗВЁЗДЫ И ПАДАЮЩИЕ ЗВЁЗДЫ
// ============================================
const canvas = document.getElementById('skyCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
let shootingStars = [];
let W, H;

function resizeCanvas() {
    W = canvas.width = window.innerWidth * devicePixelRatio;
    H = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    createStars();
}

function createStars() {
    stars = [];
    const count = Math.floor((window.innerWidth * window.innerHeight) / 6000);
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.6 * devicePixelRatio + 0.3,
            baseA: Math.random() * 0.5 + 0.3,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            phase: Math.random() * Math.PI * 2,
            hue: Math.random() * 60 + (Math.random() > 0.8 ? 280 : 200)
        });
    }
}

function spawnShootingStar() {
    const startX = Math.random() * W;
    const startY = Math.random() * H * 0.4;
    shootingStars.push({
        x: startX,
        y: startY,
        vx: (Math.random() * 6 + 8) * devicePixelRatio,
        vy: (Math.random() * 3 + 4) * devicePixelRatio,
        life: 1,
        len: Math.random() * 120 + 100
    });
}

function animateSky(t) {
    ctx.clearRect(0, 0, W, H);

    for (const s of stars) {
        const a = s.baseA + Math.sin(t * s.twinkleSpeed + s.phase) * 0.35;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 80%, 90%, ${Math.max(0.1, a)})`;
        ctx.shadowBlur = 8 * devicePixelRatio;
        ctx.shadowColor = `hsla(${s.hue}, 100%, 75%, ${a})`;
        ctx.fill();
    }
    ctx.shadowBlur = 0;

    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life -= 0.012;

        if (ss.life <= 0 || ss.x > W + 200 || ss.y > H + 200) {
            shootingStars.splice(i, 1);
            continue;
        }

        const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.vx * ss.len / 20, ss.y - ss.vy * ss.len / 20);
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.life})`);
        grad.addColorStop(0.4, `rgba(255, 168, 197, ${ss.life * 0.7})`);
        grad.addColorStop(1, 'rgba(255, 168, 197, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2 * devicePixelRatio;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.vx * ss.len / 20, ss.y - ss.vy * ss.len / 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2.5 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.life})`;
        ctx.shadowBlur = 20 * devicePixelRatio;
        ctx.shadowColor = '#ffa8c5';
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    if (Math.random() < 0.006) spawnShootingStar();

    requestAnimationFrame(animateSky);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
requestAnimationFrame(animateSky);

// ============================================
// ФОНОВЫЕ СЕРДЕЧКИ
// ============================================
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (10 + Math.random() * 16) + 'px';
    heart.style.animationDuration = (12 + Math.random() * 10) + 's';
    heart.style.animationDelay = Math.random() * 3 + 's';
    heartsBg.appendChild(heart);
    setTimeout(() => heart.remove(), 25000);
}
setInterval(createFloatingHeart, 1100);
for (let i = 0; i < 6; i++) setTimeout(createFloatingHeart, i * 500);

// ============================================
// ПРИЧИНЫ
// ============================================
function updateReason() {
    if (isAnimating) return;
    isAnimating = true;

    reasonWrap.classList.add('fade-out');

    setTimeout(() => {
        cardNumber.textContent = currentReason + 1;
        cardText.textContent = reasons[currentReason];
        progressFill.style.width = `${((currentReason + 1) / reasons.length) * 100}%`;

        reasonWrap.classList.remove('fade-out');
        reasonWrap.classList.add('fade-in');

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                reasonWrap.classList.remove('fade-in');
                setTimeout(() => { isAnimating = false; }, 400);
            });
        });
    }, 400);
}

function goToReasons(startIndex, onComplete) {
    currentReason = startIndex;
    showScreen(reasonsScreen);
    cardNumber.textContent = currentReason + 1;
    cardText.textContent = reasons[currentReason];
    progressFill.style.width = `${((currentReason + 1) / reasons.length) * 100}%`;
    isAnimating = false;
    window._reasonBlockComplete = onComplete;
}

function nextReason() {
    if (isAnimating) return;
    const blockEnd = Math.floor(currentReason / 10) * 10 + 9;
    
    if (currentReason >= blockEnd) {
        if (window._reasonBlockComplete) {
            const cb = window._reasonBlockComplete;
            window._reasonBlockComplete = null;
            cb();
            return;
        }
    }
    
    if (currentReason < reasons.length - 1) {
        currentReason++;
        updateReason();
    }
}

function prevReason() {
    if (isAnimating) return;
    const blockStart = Math.floor(currentReason / 10) * 10;
    if (currentReason > blockStart) {
        currentReason--;
        updateReason();
    }
}

// ============================================
// ИГРА 1: ПОЙМАЙ СЕРДЕЧКО
// ============================================
function startGame1() {
    showScreen(game1);
    const area = document.getElementById('g1area');
    area.innerHTML = '';
    let caught = 0;
    const target = 5;
    const totalHearts = 5;
    let spawned = 0;
    const hearts = [];
    const countEl = document.getElementById('g1count');
    countEl.textContent = '0';

    function spawnHeart() {
        if (spawned >= totalHearts) return;
        spawned++;

        const el = document.createElement('div');
        el.className = 'catch-heart';
        el.textContent = ['❤️','💖','💕','💗','💝'][Math.floor(Math.random() * 5)];
        
        const size = 60;
        const maxX = area.clientWidth - size;
        const maxY = area.clientHeight - size - 100;
        
        const obj = {
            el,
            x: Math.random() * maxX,
            y: 100 + Math.random() * maxY,
            vx: (Math.random() - 0.5) * 2.5,
            vy: (Math.random() - 0.5) * 2.5,
            size
        };
        el.style.left = obj.x + 'px';
        el.style.top = obj.y + 'px';
        area.appendChild(el);
        hearts.push(obj);

        el.addEventListener('click', (e) => {
            e.stopPropagation();
            if (el.classList.contains('caught')) return;
            el.classList.add('caught');
            caught++;
            countEl.textContent = caught;
            burstParticles(e.clientX, e.clientY);
            setTimeout(() => el.remove(), 500);
            const idx = hearts.indexOf(obj);
            if (idx > -1) hearts.splice(idx, 1);

            if (caught >= target) {
                setTimeout(() => {
                    goToReasons(0, startGame2);
                }, 500);
            } else {
                setTimeout(spawnHeart, 300);
            }
        });
    }

    function moveHearts() {
        if (!game1.classList.contains('active')) return;
        for (const h of hearts) {
            h.x += h.vx;
            h.y += h.vy;
            const maxX = area.clientWidth - h.size;
            const maxY = area.clientHeight - h.size;
            if (h.x <= 0 || h.x >= maxX) h.vx *= -1;
            if (h.y <= 100 || h.y >= maxY) h.vy *= -1;
            h.x = Math.max(0, Math.min(maxX, h.x));
            h.y = Math.max(100, Math.min(maxY, h.y));
            h.el.style.left = h.x + 'px';
            h.el.style.top = h.y + 'px';
        }
        requestAnimationFrame(moveHearts);
    }

    spawnHeart();
    moveHearts();
}

// ============================================
// ИГРА 2: ПАЗЛ-СЕРДЦЕ
// ============================================
function startGame2() {
    showScreen(game2);
    const board = document.getElementById('puzzleBoard');
    board.innerHTML = '';

    const heartSVG = `
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
                <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff6b9d"/>
                    <stop offset="50%" stop-color="#ec4899"/>
                    <stop offset="100%" stop-color="#a855f7"/>
                </linearGradient>
                <radialGradient id="shine" cx="30%" cy="30%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.6)"/>
                    <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
                </radialGradient>
            </defs>
            <path d="M150 270 C 60 200, 10 140, 10 90 C 10 40, 50 10, 90 10 C 120 10, 140 30, 150 50 C 160 30, 180 10, 210 10 C 250 10, 290 40, 290 90 C 290 140, 240 200, 150 270 Z" fill="url(#hg)"/>
            <path d="M150 270 C 60 200, 10 140, 10 90 C 10 40, 50 10, 90 10 C 120 10, 140 30, 150 50 C 160 30, 180 10, 210 10 C 250 10, 290 40, 290 90 C 290 140, 240 200, 150 270 Z" fill="url(#shine)" opacity="0.5"/>
        </svg>
    `;

    const slots = [];
    for (let i = 0; i < 9; i++) {
        const slot = document.createElement('div');
        slot.className = 'puzzle-slot';
        slot.dataset.index = i;
        board.appendChild(slot);
        slots.push(slot);
    }

    function getBackgroundStyle(index) {
        const col = index % 3;
        const row = Math.floor(index / 3);
        return `background-image: url("data:image/svg+xml;utf8,${encodeURIComponent(heartSVG)}"); background-size: 300% 300%; background-position: ${col * 50}% ${row * 50}%; background-repeat: no-repeat;`;
    }

    const tray = document.createElement('div');
    tray.className = 'puzzle-tray';
    board.parentNode.insertBefore(tray, board.nextSibling);

    const indices = [0,1,2,3,4,5,6,7,8].sort(() => Math.random() - 0.5);

    let placed = 0;
    const progressEl = document.getElementById('puzzleCount');
    progressEl.textContent = '0';

    indices.forEach(idx => {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.dataset.index = idx;
        piece.setAttribute('style', getBackgroundStyle(idx));
        tray.appendChild(piece);
    });

    let dragged = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let ghost = null;

    function onPointerDown(e, piece) {
        if (piece.classList.contains('placed')) return;
        e.preventDefault();
        const touch = e.touches ? e.touches[0] : e;
        
        ghost = piece.cloneNode(true);
        ghost.classList.add('dragging');
        ghost.style.position = 'fixed';
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '9999';
        ghost.style.width = piece.offsetWidth + 'px';
        ghost.style.height = piece.offsetHeight + 'px';
        ghost.style.left = touch.clientX - piece.offsetWidth/2 + 'px';
        ghost.style.top = touch.clientY - piece.offsetHeight/2 + 'px';
        document.body.appendChild(ghost);
        
        piece.style.opacity = '0.3';
        dragged = piece;
        dragOffsetX = piece.offsetWidth / 2;
        dragOffsetY = piece.offsetHeight / 2;
    }

    function onPointerMove(e) {
        if (!dragged || !ghost) return;
        e.preventDefault();
        const touch = e.touches ? e.touches[0] : e;
        ghost.style.left = touch.clientX - dragOffsetX + 'px';
        ghost.style.top = touch.clientY - dragOffsetY + 'px';
    }

    function onPointerUp(e) {
        if (!dragged || !ghost) return;
        const touch = e.changedTouches ? e.changedTouches[0] : e;
        
        const slotsArr = Array.from(slots);
        const targetSlot = slotsArr.find(s => {
            if (s.classList.contains('filled')) return false;
            const r = s.getBoundingClientRect();
            return touch.clientX >= r.left && touch.clientX <= r.right &&
                   touch.clientY >= r.top && touch.clientY <= r.bottom;
        });

        if (targetSlot && targetSlot.dataset.index === dragged.dataset.index) {
            targetSlot.classList.add('filled');
            targetSlot.setAttribute('style', getBackgroundStyle(dragged.dataset.index));
            dragged.classList.add('placed');
            placed++;
            progressEl.textContent = placed;
            
            if (placed === 9) {
                setTimeout(() => {
                    goToReasons(10, startGame3);
                }, 700);
            }
        }

        dragged.style.opacity = '';
        dragged = null;
        ghost.remove();
        ghost = null;
    }

    document.querySelectorAll('.puzzle-piece').forEach(p => {
        p.addEventListener('mousedown', (e) => onPointerDown(e, p));
        p.addEventListener('touchstart', (e) => onPointerDown(e, p), { passive: false });
    });
    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchend', onPointerUp);
}

// ============================================
// ИГРА 3: УСПЕЙ НАЖАТЬ
// ============================================
function startGame3() {
    showScreen(game3);
    const btn = document.getElementById('g3btn');
    const countEl = document.getElementById('g3count');
    const timerEl = document.getElementById('g3timer');
    
    let clicks = 0;
    const target = 10;
    const totalTime = 8;
    let timeLeft = totalTime;
    let finished = false;
    let intervalId;

    countEl.textContent = '0';
    timerEl.textContent = totalTime.toFixed(1);
    btn.disabled = false;
    btn.querySelector('span').textContent = 'НАЖМИ!';

    function endGame(success) {
        if (finished) return;
        finished = true;
        clearInterval(intervalId);
        btn.disabled = true;
        btn.querySelector('span').textContent = success ? 'ГОТОВО!' : 'ВРЕМЯ!';
        setTimeout(() => {
            goToReasons(20, startGame4);
        }, 800);
    }

    btn.onclick = () => {
        if (finished) return;
        clicks++;
        countEl.textContent = clicks;
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => btn.style.transform = '', 100);
        
        const r = btn.getBoundingClientRect();
        burstParticles(r.left + r.width/2, r.top + r.height/2);
        
        if (clicks >= target) endGame(true);
    };

    intervalId = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) {
            timeLeft = 0;
            timerEl.textContent = '0.0';
            endGame(clicks >= target);
        } else {
            timerEl.textContent = timeLeft.toFixed(1);
        }
    }, 100);
}

// ============================================
// ИГРА 4: НАЙДИ ПАРУ (memory)
// ============================================
function startGame4() {
    showScreen(game4);
    const grid = document.getElementById('g4grid');
    grid.innerHTML = '';
    const countEl = document.getElementById('g4count');
    countEl.textContent = '0';

    const cards = [...memoryPairs, ...memoryPairs].sort(() => Math.random() - 0.5);
    
    let firstCard = null;
    let lock = false;
    let matched = 0;

    cards.forEach((emoji) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.innerHTML = `
            <div class="memory-inner">
                <div class="memory-front"></div>
                <div class="memory-back">${emoji}</div>
            </div>
        `;
        grid.appendChild(card);

        card.addEventListener('click', () => {
            if (lock) return;
            if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

            card.classList.add('flipped');

            if (!firstCard) {
                firstCard = card;
            } else {
                if (firstCard.dataset.emoji === card.dataset.emoji) {
                    firstCard.classList.add('matched');
                    card.classList.add('matched');
                    matched++;
                    countEl.textContent = matched;
                    firstCard = null;
                    
                    if (matched === memoryPairs.length) {
                        setTimeout(() => {
                            goToReasons(30, startGame5);
                        }, 700);
                    }
                } else {
                    lock = true;
                    const a = firstCard;
                    const b = card;
                    firstCard = null;
                    setTimeout(() => {
                        a.classList.remove('flipped');
                        b.classList.remove('flipped');
                        lock = false;
                    }, 900);
                }
            }
        });
    });
}

// ============================================
// ИГРА 5: ЛОПНИ ШАРИКИ (бесконечный спавн, пока не поймают 15)
// ============================================
function startGame5() {
    showScreen(game5);
    const area = document.getElementById('g5area');
    area.innerHTML = '';
    const countEl = document.getElementById('g5count');
    countEl.textContent = '0';

    let popped = 0;
    const target = 15;
    const colors = [
        'linear-gradient(135deg, #ff6b9d, #ec4899)',
        'linear-gradient(135deg, #a855f7, #6366f1)',
        'linear-gradient(135deg, #fbbf24, #f59e0b)',
        'linear-gradient(135deg, #34d399, #10b981)',
        'linear-gradient(135deg, #60a5fa, #3b82f6)',
        'linear-gradient(135deg, #f472b6, #db2777)'
    ];

    let finished = false;
    let activeBalloons = 0;
    const maxOnScreen = 6;
    let spawnInterval = null;

    function finishGame() {
        if (finished) return;
        finished = true;
        if (spawnInterval) clearInterval(spawnInterval);
        area.querySelectorAll('.balloon').forEach(b => b.remove());
        
        setTimeout(() => {
            // После шариков → последние 10 причин (41-50), затем письмо
            goToReasons(40, showLetter);
        }, 800);
    }

    function spawnBalloon() {
        if (finished) return;
        if (popped >= target) return;
        if (activeBalloons >= maxOnScreen) return;

        activeBalloons++;
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const size = 50 + Math.random() * 15;
        balloon.style.width = size + 'px';
        balloon.style.height = (size * 1.3) + 'px';
        
        const x = Math.random() * (area.clientWidth - size);
        balloon.style.left = x + 'px';
        balloon.style.bottom = '-80px';
        
        const duration = 4 + Math.random() * 3;
        balloon.style.animationDuration = duration + 's';
        
        area.appendChild(balloon);

        let removed = false;

        balloon.addEventListener('click', (e) => {
            e.stopPropagation();
            if (removed || balloon.classList.contains('popped')) return;
            removed = true;
            balloon.classList.add('popped');
            popped++;
            countEl.textContent = popped;
            burstParticles(e.clientX, e.clientY);
            
            setTimeout(() => {
                if (balloon.parentNode) balloon.remove();
                activeBalloons--;
            }, 300);

            if (popped >= target) {
                finishGame();
            }
        });

        setTimeout(() => {
            if (removed) return;
            removed = true;
            if (balloon.parentNode) balloon.remove();
            activeBalloons--;
            if (!finished && popped < target) {
                spawnBalloon();
            }
        }, duration * 1000 + 100);
    }

    for (let i = 0; i < 5; i++) {
        setTimeout(spawnBalloon, i * 300);
    }

    spawnInterval = setInterval(() => {
        if (finished) return;
        if (popped >= target) {
            finishGame();
            return;
        }
        if (activeBalloons < maxOnScreen) {
            spawnBalloon();
        }
    }, 600);
}

// ============================================
// ПИСЬМО
// ============================================
function showLetter() {
    letterText.textContent = letterContent;
    showScreen(letterScreen);
}

// ============================================
// ЧАСТИЦЫ
// ============================================
function burstParticles(x, y) {
    const emojis = ['❤️','💖','✨','💕','⭐'];
    for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 80;
        p.style.setProperty('--px', Math.cos(angle) * dist + 'px');
        p.style.setProperty('--py', Math.sin(angle) * dist + 'px');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1100);
    }
}

function burstHearts() {
    const emojis = ['❤️','💖','💕','💗','💝','💘'];
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            h.style.position = 'fixed';
            h.style.left = '50%';
            h.style.top = '50%';
            h.style.fontSize = (20 + Math.random() * 30) + 'px';
            h.style.pointerEvents = 'none';
            h.style.zIndex = '999';
            h.style.transition = 'transform 2s ease-out, opacity 2s ease-out';
            document.body.appendChild(h);
            const angle = Math.random() * Math.PI * 2;
            const dist = 150 + Math.random() * 300;
            const x = Math.cos(angle) * dist;
            const y = Math.sin(angle) * dist;
            requestAnimationFrame(() => {
                h.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*360}deg) scale(1.5)`;
                h.style.opacity = '0';
            });
            setTimeout(() => h.remove(), 2200);
        }, i * 35);
    }
}

// ============================================
// ОБРАБОТЧИКИ
// ============================================
startBtn.addEventListener('click', () => {
    startGame1();
});

finalRestart.addEventListener('click', () => {
    currentReason = 0;
    showScreen(startScreen);
});

letterBtn.addEventListener('click', () => {
    showScreen(finalScreen);
    burstHearts();
});

tapLeft.addEventListener('click', prevReason);
tapRight.addEventListener('click', nextReason);

// ============================================
// СВАЙПЫ
// ============================================
let touchStartX = 0, touchStartY = 0, touchStartTime = 0;

document.addEventListener('touchstart', (e) => {
    if (!reasonsScreen.classList.contains('active')) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    touchStartTime = Date.now();
}, { passive: true });

document.addEventListener('touchend', (e) => {
    if (!reasonsScreen.classList.contains('active')) return;
    const dx = touchStartX - e.changedTouches[0].screenX;
    const dy = touchStartY - e.changedTouches[0].screenY;
    const dt = Date.now() - touchStartTime;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) && dt < 800) {
        if (dx > 0) nextReason();
        else prevReason();
    }
}, { passive: true });

document.addEventListener('keydown', (e) => {
    if (!reasonsScreen.classList.contains('active')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') nextReason();
    if (e.key === 'ArrowLeft') prevReason();
});

document.addEventListener('gesturestart', (e) => e.preventDefault());