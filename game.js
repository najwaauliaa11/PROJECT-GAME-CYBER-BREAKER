/**
 * CYBER BREAKER - Complete Game Engine
 * Rich Canvas Block Breaker with Eye-Care Adaptability, Particle Physics & Levels.
 */

// ==========================================
// 1. GAME CONSTANTS & COLOR THEMES
// ==========================================
const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;

// Color Palettes corresponding to Eye-Care modes
const PALETTES = {
  cyber: {
    name: 'Cyber Neon',
    accent: '#FFE600',
    accentBright: '#FFF275',
    accentDark: '#A16207',
    glow: 'rgba(255, 230, 0, 0.45)',
    ballTrail: 'rgba(255, 230, 0, 0.3)',
    paddle: '#FFE600',
    brick1: '#FFE600',
    brick2: '#FBBF24',
    brick3: '#D97706',
    bomb: '#EF4444',
    mystery: '#38BDF8',
    steel: '#64748B'
  },
  warm: {
    name: 'Warm Amber',
    accent: '#F59E0B',
    accentBright: '#FCD34D',
    accentDark: '#92400E',
    glow: 'rgba(245, 158, 11, 0.35)',
    ballTrail: 'rgba(245, 158, 11, 0.25)',
    paddle: '#F59E0B',
    brick1: '#F59E0B',
    brick2: '#D97706',
    brick3: '#B45309',
    bomb: '#F87171',
    mystery: '#38BDF8',
    steel: '#78716C'
  },
  soft: {
    name: 'Soft Glow',
    accent: '#E2C044',
    accentBright: '#EFE08C',
    accentDark: '#7A6615',
    glow: 'rgba(226, 192, 68, 0.22)',
    ballTrail: 'rgba(226, 192, 68, 0.18)',
    paddle: '#E2C044',
    brick1: '#E2C044',
    brick2: '#C9A733',
    brick3: '#A3841D',
    bomb: '#E17055',
    mystery: '#67E8F9',
    steel: '#64748B'
  },
  zen: {
    name: 'Zen Dark',
    accent: '#CA8A04',
    accentBright: '#D97706',
    accentDark: '#713F12',
    glow: 'rgba(202, 138, 4, 0.15)',
    ballTrail: 'rgba(202, 138, 4, 0.12)',
    paddle: '#CA8A04',
    brick1: '#CA8A04',
    brick2: '#A16207',
    brick3: '#854D0E',
    bomb: '#DC2626',
    mystery: '#0284C7',
    steel: '#475569'
  }
};

// Power-up Types definition
const POWERUP_TYPES = {
  LASER: { id: 'laser', name: 'LASER CANNON', color: '#EF4444', icon: '⚡', duration: 9000 },
  WIDE: { id: 'wide', name: 'WIDE PADDLE', color: '#10B981', icon: '⬌', duration: 11000 },
  FIREBALL: { id: 'fireball', name: 'FIREBALL', color: '#F97316', icon: '🔥', duration: 7500 },
  MULTIBALL: { id: 'multiball', name: 'MULTI-BALL', color: '#38BDF8', icon: '🔮', instant: true },
  SHIELD: { id: 'shield', name: 'ENERGY SHIELD', color: '#A855F7', icon: '🛡️', duration: 15000 },
  SLOW: { id: 'slow', name: 'TIME SLOW', color: '#6366F1', icon: '⏱️', duration: 8000 },
  LIFE: { id: 'life', name: '+1 LIFE', color: '#EC4899', icon: '❤️', instant: true }
};

// ==========================================
// 2. LEVEL DESIGNS
// ==========================================
const LEVEL_DATA = [
  {
    id: 1,
    name: 'Neon Dawn',
    desc: 'Pengenalan sistem pertahanan grid dasar',
    rows: 5,
    cols: 10,
    ballSpeed: 6.5,
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 'P', 1, 1, 1, 1, 'P', 1, 1],
      [0, 1, 1, 1, 'B', 'B', 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 'P', 'P', 1, 0, 0, 0]
    ]
  },
  {
    id: 2,
    name: 'Cyber Fortress',
    desc: 'Dinding titanium dengan inti bahan peledak TNT',
    rows: 6,
    cols: 11,
    ballSpeed: 7.0,
    map: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 1, 1, 'P', 1, 1, 1, 'P', 1, 1, 2],
      [2, 1, 'B', 1, 2, 'B', 2, 1, 'B', 1, 2],
      [2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2],
      [0, 2, 1, 1, 1, 'P', 1, 1, 1, 2, 0],
      [0, 0, 2, 2, 1, 1, 1, 2, 2, 0, 0]
    ]
  },
  {
    id: 3,
    name: 'Quantum Matrix',
    desc: 'Pola papan catur tak tembus pandang berdaya tinggi',
    rows: 7,
    cols: 12,
    ballSpeed: 7.5,
    map: [
      ['X', 1, 'P', 1, 'X', 1, 1, 'X', 1, 'P', 1, 'X'],
      [1, 2, 2, 2, 1, 'B', 'B', 1, 2, 2, 2, 1],
      ['P', 2, 3, 3, 2, 1, 1, 2, 3, 3, 2, 'P'],
      [1, 2, 3, 'P', 2, 'B', 'B', 2, 'P', 3, 2, 1],
      [0, 1, 2, 2, 1, 'X', 'X', 1, 2, 2, 1, 0],
      [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
      [0, 0, 0, 'P', 0, 0, 0, 0, 'P', 0, 0, 0]
    ]
  },
  {
    id: 4,
    name: 'Vortex Hazard',
    desc: 'Susunan labirin padat dengan jebakan sudut tajam',
    rows: 7,
    cols: 12,
    ballSpeed: 8.0,
    map: [
      [3, 'B', 1, 1, 2, 'P', 'P', 2, 1, 1, 'B', 3],
      [3, 2, 'X', 1, 1, 2, 2, 1, 1, 'X', 2, 3],
      [2, 2, 1, 'B', 1, 'X', 'X', 1, 'B', 1, 2, 2],
      [1, 'P', 2, 2, 3, 3, 3, 3, 2, 2, 'P', 1],
      [1, 1, 0, 2, 'P', 1, 1, 'P', 2, 0, 1, 1],
      [0, 2, 0, 1, 1, 'B', 'B', 1, 1, 0, 2, 0],
      [0, 0, 3, 0, 0, 2, 2, 0, 0, 3, 0, 0]
    ]
  },
  {
    id: 5,
    name: 'Titan Core',
    desc: 'Inti super-komputer terpadat dengan armor berlapis',
    rows: 8,
    cols: 12,
    ballSpeed: 8.5,
    map: [
      ['X', 3, 3, 3, 3, 'B', 'B', 3, 3, 3, 3, 'X'],
      [3, 2, 2, 'P', 2, 3, 3, 2, 'P', 2, 2, 3],
      [3, 2, 'X', 1, 2, 'B', 'B', 2, 1, 'X', 2, 3],
      [3, 'P', 1, 1, 1, 2, 2, 1, 1, 1, 'P', 3],
      [2, 3, 2, 'B', 2, 1, 1, 2, 'B', 2, 3, 2],
      [1, 2, 3, 2, 1, 'P', 'P', 1, 2, 3, 2, 1],
      [0, 1, 2, 3, 0, 'X', 'X', 0, 3, 2, 1, 0],
      [0, 0, 1, 2, 'P', 0, 0, 'P', 2, 1, 0, 0]
    ]
  }
];

// ==========================================
// 3. CORE GAME ENGINE CLASS
// ==========================================
class CyberBreakerGame {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.floatingLayer = document.getElementById('hud-floating-layer');

    // Display mode & visual settings
    this.currentThemeKey = localStorage.getItem('cyberbreaker_theme') || 'cyber';
    this.theme = PALETTES[this.currentThemeKey] || PALETTES.cyber;

    // Game state
    this.state = 'START'; // 'START', 'PLAYING', 'PAUSED', 'GAMEOVER', 'VICTORY'
    this.currentLevelIndex = 0;
    this.score = 0;
    this.highScore = parseInt(localStorage.getItem('cyberbreaker_highscore') || '0', 10);
    this.lives = 3;
    this.combo = 1;
    this.comboTimer = null;
    this.bricksDestroyedTotal = 0;
    this.maxComboReached = 1;
    this.stageStartTime = 0;

    // Game Entities
    this.paddle = {
      x: CANVAS_WIDTH / 2 - 60,
      y: CANVAS_HEIGHT - 35,
      baseWidth: 120,
      width: 120,
      height: 14,
      targetX: CANVAS_WIDTH / 2 - 60,
      speed: 10,
      glowPulse: 0
    };

    this.balls = [];
    this.bricks = [];
    this.powerups = [];
    this.particles = [];
    this.lasers = [];
    this.activeBuffs = new Map(); // key: buffId, value: { expiresAt, intervalId }

    // Screen Shake
    this.screenShake = 0;

    // Input Tracking
    this.keys = { left: false, right: false, space: false };
    this.mouseControl = true;
    this.mouseX = CANVAS_WIDTH / 2;

    // Laser auto-fire tracking
    this.lastLaserFired = 0;

    // Shield
    this.hasShield = false;

    // Setup Event Listeners & Initialize
    this.initDOM();
    this.initInputs();
    this.applyTheme(this.currentThemeKey);
    this.updateHUD();
    this.renderLevelSelectGrid();

    // Start Game Loop
    this.lastFrameTime = performance.now();
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  // ------------------------------------------
  // DOM & UI Initialization
  // ------------------------------------------
  initDOM() {
    // Theme Selector
    const modeSelect = document.getElementById('eye-mode-select');
    modeSelect.value = this.currentThemeKey;
    modeSelect.addEventListener('change', (e) => {
      this.applyTheme(e.target.value);
    });

    // Sound Button
    const btnAudio = document.getElementById('btn-audio');
    const iconSoundOn = document.getElementById('icon-sound-on');
    const iconSoundOff = document.getElementById('icon-sound-off');

    const updateAudioIcon = (muted) => {
      if (muted) {
        iconSoundOn.classList.add('hidden');
        iconSoundOff.classList.remove('hidden');
      } else {
        iconSoundOn.classList.remove('hidden');
        iconSoundOff.classList.add('hidden');
      }
    };
    updateAudioIcon(window.soundFX.isMuted);

    btnAudio.addEventListener('click', () => {
      const isMuted = window.soundFX.toggleMute();
      updateAudioIcon(isMuted);
    });

    // Pause Button
    const btnPause = document.getElementById('btn-pause');
    btnPause.addEventListener('click', () => {
      this.togglePause();
    });

    // Overlay Action Buttons
    document.getElementById('btn-start-game').addEventListener('click', () => {
      window.soundFX.ensureContext();
      this.startLevel(this.currentLevelIndex);
      this.hideAllOverlays();
    });

    document.getElementById('btn-select-level-menu').addEventListener('click', () => {
      this.showOverlay('overlay-levels');
    });

    document.getElementById('btn-back-from-levels').addEventListener('click', () => {
      this.showOverlay('overlay-start');
    });

    document.getElementById('btn-resume-game').addEventListener('click', () => {
      this.resumeGame();
    });

    document.getElementById('btn-restart-level').addEventListener('click', () => {
      this.startLevel(this.currentLevelIndex);
      this.hideAllOverlays();
    });

    document.getElementById('btn-quit-to-menu').addEventListener('click', () => {
      this.state = 'START';
      this.showOverlay('overlay-start');
    });

    document.getElementById('btn-retry').addEventListener('click', () => {
      this.score = 0;
      this.lives = 3;
      this.startLevel(this.currentLevelIndex);
      this.hideAllOverlays();
    });

    document.getElementById('btn-go-menu').addEventListener('click', () => {
      this.showOverlay('overlay-levels');
    });

    document.getElementById('btn-next-level').addEventListener('click', () => {
      let next = this.currentLevelIndex + 1;
      if (next >= LEVEL_DATA.length) next = 0; // or loop
      this.startLevel(next);
      this.hideAllOverlays();
    });

    document.getElementById('btn-vic-menu').addEventListener('click', () => {
      this.showOverlay('overlay-levels');
    });
  }

  // ------------------------------------------
  // Eye-Care Theme Application
  // ------------------------------------------
  applyTheme(themeKey) {
    if (!PALETTES[themeKey]) themeKey = 'cyber';
    this.currentThemeKey = themeKey;
    this.theme = PALETTES[themeKey];
    localStorage.setItem('cyberbreaker_theme', themeKey);

    // Update body class
    document.body.className = `mode-${themeKey}`;
  }

  // ------------------------------------------
  // Input Listeners
  // ------------------------------------------
  initInputs() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = true;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = true;

      if (e.code === 'Space') {
        e.preventDefault();
        window.soundFX.ensureContext();
        if (this.state === 'PLAYING') {
          this.releaseBall();
          this.fireLaser();
        } else if (this.state === 'PAUSED') {
          this.resumeGame();
        }
      }

      if (e.code === 'KeyP' || e.code === 'Escape') {
        this.togglePause();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = false;
      if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = false;
    });

    // Mouse Tracking across Canvas
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = CANVAS_WIDTH / rect.width;
      this.mouseX = (e.clientX - rect.left) * scaleX;
      this.mouseControl = true;
    });

    this.canvas.addEventListener('click', (e) => {
      window.soundFX.ensureContext();
      if (this.state === 'PLAYING') {
        this.releaseBall();
        this.fireLaser();
      }
    });

    // Touch Support
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = CANVAS_WIDTH / rect.width;
      this.mouseX = (touch.clientX - rect.left) * scaleX;
      this.mouseControl = true;
    }, { passive: false });

    this.canvas.addEventListener('touchstart', (e) => {
      window.soundFX.ensureContext();
      if (this.state === 'PLAYING') {
        this.releaseBall();
        this.fireLaser();
      }
    }, { passive: true });
  }

  // ------------------------------------------
  // Level Management & Initialization
  // ------------------------------------------
  startLevel(index) {
    if (index >= LEVEL_DATA.length) index = 0;
    this.currentLevelIndex = index;
    const level = LEVEL_DATA[index];

    this.state = 'PLAYING';
    this.stageStartTime = Date.now();
    this.hasShield = false;
    this.clearAllBuffs();

    // Reset paddle
    this.paddle.width = this.paddle.baseWidth;
    this.paddle.x = CANVAS_WIDTH / 2 - this.paddle.width / 2;
    this.paddle.targetX = this.paddle.x;

    // Reset Balls (1 ball stuck to paddle ready to launch)
    this.balls = [];
    this.spawnBall(true, level.ballSpeed);

    // Build Bricks from map
    this.buildBricks(level);

    // Clear dynamic entities
    this.powerups = [];
    this.particles = [];
    this.lasers = [];
    this.screenShake = 0;
    this.combo = 1;

    // Show launch hint
    const hint = document.getElementById('launch-hint');
    if (hint) hint.classList.add('visible');

    // Update HUD
    this.updateHUD();
    this.saveProgress(index);
  }

  spawnBall(stuck = true, speed = 7.0) {
    this.balls.push({
      x: this.paddle.x + this.paddle.width / 2,
      y: this.paddle.y - 10,
      radius: 7,
      vx: speed * 0.707 * (Math.random() > 0.5 ? 1 : -1),
      vy: -speed * 0.707,
      speed: speed,
      stuck: stuck,
      fireball: false,
      trail: []
    });
  }

  releaseBall() {
    let releasedAny = false;
    this.balls.forEach(ball => {
      if (ball.stuck) {
        ball.stuck = false;
        ball.vx = ball.speed * 0.707 * (Math.random() > 0.5 ? 0.8 : -0.8);
        ball.vy = -Math.abs(ball.speed * 0.707);
        releasedAny = true;
      }
    });

    if (releasedAny) {
      const hint = document.getElementById('launch-hint');
      if (hint) hint.classList.remove('visible');
    }
  }

  buildBricks(level) {
    this.bricks = [];
    const paddingX = 45;
    const paddingY = 65;
    const gap = 8;
    const totalCols = level.cols;
    const brickWidth = (CANVAS_WIDTH - paddingX * 2 - (totalCols - 1) * gap) / totalCols;
    const brickHeight = 22;

    for (let r = 0; r < level.map.length; r++) {
      for (let c = 0; c < level.map[r].length; c++) {
        const type = level.map[r][c];
        if (type === 0) continue;

        let maxHp = 1;
        let indestructible = false;
        let isBomb = false;
        let isMystery = false;

        if (type === 1) maxHp = 1;
        else if (type === 2) maxHp = 2;
        else if (type === 3) maxHp = 3;
        else if (type === 'B') { maxHp = 1; isBomb = true; }
        else if (type === 'P') { maxHp = 1; isMystery = true; }
        else if (type === 'X') { maxHp = 999; indestructible = true; }

        this.bricks.push({
          x: paddingX + c * (brickWidth + gap),
          y: paddingY + r * (brickHeight + gap),
          width: brickWidth,
          height: brickHeight,
          hp: maxHp,
          maxHp: maxHp,
          type: type,
          indestructible: indestructible,
          isBomb: isBomb,
          isMystery: isMystery,
          glowIntensity: 1,
          row: r,
          col: c
        });
      }
    }
  }

  // ------------------------------------------
  // Game Loop: Update & Draw
  // ------------------------------------------
  gameLoop(timestamp) {
    const dt = Math.min((timestamp - this.lastFrameTime) / 1000, 0.1);
    this.lastFrameTime = timestamp;

    if (this.state === 'PLAYING') {
      this.update(dt);
    }

    this.draw();
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  update(dt) {
    // 1. Paddle Movement
    if (this.keys.left) {
      this.paddle.x -= this.paddle.speed * 60 * dt;
      this.mouseControl = false;
    }
    if (this.keys.right) {
      this.paddle.x += this.paddle.speed * 60 * dt;
      this.mouseControl = false;
    }

    if (this.mouseControl) {
      // Smooth lerp to mouse position
      const target = this.mouseX - this.paddle.width / 2;
      this.paddle.x += (target - this.paddle.x) * 0.35;
    }

    // Clamp paddle within canvas
    if (this.paddle.x < 10) this.paddle.x = 10;
    if (this.paddle.x + this.paddle.width > CANVAS_WIDTH - 10) {
      this.paddle.x = CANVAS_WIDTH - 10 - this.paddle.width;
    }

    // 2. Balls Update
    for (let i = this.balls.length - 1; i >= 0; i--) {
      const ball = this.balls[i];

      if (ball.stuck) {
        ball.x = this.paddle.x + this.paddle.width / 2;
        ball.y = this.paddle.y - ball.radius - 2;
        continue;
      }

      // Record trail
      ball.trail.push({ x: ball.x, y: ball.y });
      if (ball.trail.length > 7) ball.trail.shift();

      // Speed slow buff adjustment
      const speedMultiplier = this.activeBuffs.has('slow') ? 0.65 : 1.0;

      ball.x += ball.vx * speedMultiplier;
      ball.y += ball.vy * speedMultiplier;

      // Wall Collisions
      if (ball.x - ball.radius <= 0) {
        ball.x = ball.radius;
        ball.vx = Math.abs(ball.vx);
        window.soundFX.playPaddleHit(0.5);
      } else if (ball.x + ball.radius >= CANVAS_WIDTH) {
        ball.x = CANVAS_WIDTH - ball.radius;
        ball.vx = -Math.abs(ball.vx);
        window.soundFX.playPaddleHit(0.5);
      }

      if (ball.y - ball.radius <= 0) {
        ball.y = ball.radius;
        ball.vy = Math.abs(ball.vy);
        window.soundFX.playPaddleHit(0.5);
      }

      // Floor / Bottom Collision
      if (ball.y - ball.radius > CANVAS_HEIGHT) {
        if (this.hasShield) {
          // Bounce off energy shield!
          ball.y = CANVAS_HEIGHT - ball.radius - 8;
          ball.vy = -Math.abs(ball.vy);
          this.hasShield = false;
          this.spawnShockwave(ball.x, CANVAS_HEIGHT - 5, this.theme.accent);
          window.soundFX.playArmoredHit();
          this.showFloatingText('SHIELD SAVED!', ball.x, CANVAS_HEIGHT - 30);
          this.updateBuffDisplay();
        } else {
          // Remove ball
          this.balls.splice(i, 1);
          continue;
        }
      }

      // Paddle Collision
      if (
        ball.y + ball.radius >= this.paddle.y &&
        ball.y - ball.radius <= this.paddle.y + this.paddle.height &&
        ball.x >= this.paddle.x - ball.radius &&
        ball.x <= this.paddle.x + this.paddle.width + ball.radius &&
        ball.vy > 0
      ) {
        // Calculate offset percentage: -1 (far left) to +1 (far right)
        const hitOffset = (ball.x - (this.paddle.x + this.paddle.width / 2)) / (this.paddle.width / 2);
        const clampedOffset = Math.max(-0.95, Math.min(0.95, hitOffset));

        // Steeper angle on paddle edges
        const maxAngle = (75 * Math.PI) / 180;
        const bounceAngle = clampedOffset * maxAngle;
        const currentSpeed = Math.hypot(ball.vx, ball.vy);

        ball.vx = currentSpeed * Math.sin(bounceAngle);
        ball.vy = -currentSpeed * Math.cos(bounceAngle);
        ball.y = this.paddle.y - ball.radius;

        // Reset combo count on paddle touch
        this.resetCombo();

        // Particles & Audio
        this.spawnPaddleSparkles(ball.x, this.paddle.y);
        window.soundFX.playPaddleHit((clampedOffset + 1) / 2);
      }

      // Brick Collisions
      this.checkBrickCollisions(ball);
    }

    // Check if all balls were lost
    if (this.balls.length === 0) {
      this.loseLife();
    }

    // 3. Lasers Update
    for (let l = this.lasers.length - 1; l >= 0; l--) {
      const laser = this.lasers[l];
      laser.y -= laser.speed * 60 * dt;

      // Laser wall check
      if (laser.y < 0) {
        this.lasers.splice(l, 1);
        continue;
      }

      // Laser brick hit check
      for (let b = 0; b < this.bricks.length; b++) {
        const brick = this.bricks[b];
        if (
          laser.x >= brick.x &&
          laser.x <= brick.x + brick.width &&
          laser.y >= brick.y &&
          laser.y <= brick.y + brick.height
        ) {
          this.hitBrick(brick, b, true);
          this.lasers.splice(l, 1);
          break;
        }
      }
    }

    // 4. Powerups Falling
    for (let p = this.powerups.length - 1; p >= 0; p--) {
      const powerup = this.powerups[p];
      powerup.y += powerup.vy * 60 * dt;
      powerup.rotation += 2.5 * dt;

      // Offscreen
      if (powerup.y > CANVAS_HEIGHT) {
        this.powerups.splice(p, 1);
        continue;
      }

      // Caught by Paddle
      if (
        powerup.y + powerup.radius >= this.paddle.y &&
        powerup.y - powerup.radius <= this.paddle.y + this.paddle.height &&
        powerup.x >= this.paddle.x &&
        powerup.x <= this.paddle.x + this.paddle.width
      ) {
        this.collectPowerup(powerup.type);
        this.spawnShockwave(powerup.x, powerup.y, powerup.type.color);
        this.powerups.splice(p, 1);
      }
    }

    // 5. Particles Update
    for (let pt = this.particles.length - 1; pt >= 0; pt--) {
      const part = this.particles[pt];
      part.x += part.vx;
      part.y += part.vy;
      part.vx *= 0.96;
      part.vy += part.gravity || 0.12;
      part.life -= dt * part.decay;

      if (part.life <= 0) {
        this.particles.splice(pt, 1);
      }
    }

    // 6. Screen Shake decay
    if (this.screenShake > 0) {
      this.screenShake = Math.max(0, this.screenShake - 20 * dt);
    }

    // 7. Check Stage Victory Condition
    const remainingDestructible = this.bricks.filter(b => !b.indestructible).length;
    if (remainingDestructible === 0) {
      this.triggerVictory();
    }
  }

  // ------------------------------------------
  // Collision Detection with Bricks
  // ------------------------------------------
  checkBrickCollisions(ball) {
    for (let i = 0; i < this.bricks.length; i++) {
      const brick = this.bricks[i];

      // AABB check
      const closestX = Math.max(brick.x, Math.min(ball.x, brick.x + brick.width));
      const closestY = Math.max(brick.y, Math.min(ball.y, brick.y + brick.height));
      const distX = ball.x - closestX;
      const distY = ball.y - closestY;
      const distSq = distX * distX + distY * distY;

      if (distSq < ball.radius * ball.radius) {
        // Hit detected!
        if (!ball.fireball || brick.indestructible) {
          // Ricochet physics
          const prevX = ball.x - ball.vx;
          const prevY = ball.y - ball.vy;

          if (prevX < brick.x || prevX > brick.x + brick.width) {
            ball.vx = -ball.vx;
          } else {
            ball.vy = -ball.vy;
          }
        }

        this.hitBrick(brick, i, false);
        break; // Process one brick collision per frame for consistency
      }
    }
  }

  hitBrick(brick, index, fromLaser = false) {
    if (brick.indestructible) {
      window.soundFX.playArmoredHit();
      this.spawnDebris(brick.x + brick.width / 2, brick.y + brick.height / 2, this.theme.steel, 4);
      return;
    }

    brick.hp--;
    this.screenShake = Math.min(this.screenShake + 4, 12);

    if (brick.hp <= 0) {
      // Brick Destroyed!
      this.bricks.splice(index, 1);
      this.bricksDestroyedTotal++;
      this.incrementCombo();

      const brickCenterX = brick.x + brick.width / 2;
      const brickCenterY = brick.y + brick.height / 2;

      // Sound FX
      if (brick.isBomb) {
        window.soundFX.playExplosion();
        this.triggerBomb(brickCenterX, brickCenterY);
      } else {
        window.soundFX.playBrickHit(this.combo);
      }

      // Drop Power-up chance
      if (brick.isMystery || Math.random() < 0.18) {
        this.spawnPowerup(brickCenterX, brickCenterY);
      }

      // Add Score & Floating Text
      const points = 100 * this.combo;
      this.score += points;
      this.showFloatingText(`+${points}`, brickCenterX, brickCenterY);

      // Explosive particle burst
      const brickColor = this.getBrickColor(brick);
      this.spawnDebris(brickCenterX, brickCenterY, brickColor, 12);
    } else {
      // Brick Damaged (Armor absorb)
      window.soundFX.playArmoredHit();
      const brickColor = this.getBrickColor(brick);
      this.spawnDebris(brick.x + brick.width / 2, brick.y + brick.height / 2, brickColor, 5);
    }

    this.updateHUD();
  }

  // Bomb 3x3 blast wave
  triggerBomb(x, y) {
    this.screenShake = 14;
    this.spawnShockwave(x, y, '#EF4444');

    const blastRadius = 95;
    for (let i = this.bricks.length - 1; i >= 0; i--) {
      const b = this.bricks[i];
      if (b.indestructible) continue;

      const bx = b.x + b.width / 2;
      const by = b.y + b.height / 2;
      const d = Math.hypot(bx - x, by - y);

      if (d <= blastRadius) {
        b.hp = 0;
        this.bricks.splice(i, 1);
        this.bricksDestroyedTotal++;
        this.score += 150 * this.combo;
        this.spawnDebris(bx, by, this.theme.accent, 8);
      }
    }
  }

  // ------------------------------------------
  // Combo & Streak Counter
  // ------------------------------------------
  incrementCombo() {
    this.combo++;
    if (this.combo > this.maxComboReached) {
      this.maxComboReached = this.combo;
    }

    clearTimeout(this.comboTimer);
    // Combo resets after 2.5s if not hitting anything
    this.comboTimer = setTimeout(() => {
      this.resetCombo();
    }, 2500);

    const multEl = document.getElementById('hud-multiplier');
    if (multEl) {
      multEl.textContent = `COMBO x${this.combo}`;
      if (this.combo >= 4) {
        multEl.classList.add('glow-text');
      }
    }
  }

  resetCombo() {
    this.combo = 1;
    const multEl = document.getElementById('hud-multiplier');
    if (multEl) {
      multEl.textContent = `COMBO x1.0`;
      multEl.classList.remove('glow-text');
    }
  }

  // ------------------------------------------
  // Power-Ups System
  // ------------------------------------------
  spawnPowerup(x, y) {
    const keys = Object.keys(POWERUP_TYPES);
    const selectedKey = keys[Math.floor(Math.random() * keys.length)];
    const type = POWERUP_TYPES[selectedKey];

    this.powerups.push({
      x: x,
      y: y,
      radius: 12,
      vy: 2.2,
      rotation: 0,
      type: type
    });
  }

  collectPowerup(type) {
    window.soundFX.playPowerupCollect();
    this.showFloatingText(type.name, this.paddle.x + this.paddle.width / 2, this.paddle.y - 20);

    if (type.instant) {
      if (type.id === 'multiball') {
        // Spawn 2 extra balls at paddle or active ball location
        const refBall = this.balls[0] || { x: this.paddle.x + this.paddle.width / 2, y: this.paddle.y - 10, speed: 7 };
        for (let i = 0; i < 2; i++) {
          const angle = (Math.PI / 4) * (i === 0 ? 1 : -1) + (Math.random() * 0.2 - 0.1);
          this.balls.push({
            x: refBall.x,
            y: refBall.y,
            radius: 7,
            vx: refBall.speed * Math.sin(angle),
            vy: -Math.abs(refBall.speed * Math.cos(angle)),
            speed: refBall.speed,
            stuck: false,
            fireball: this.activeBuffs.has('fireball'),
            trail: []
          });
        }
      } else if (type.id === 'life') {
        if (this.lives < 5) this.lives++;
        this.updateHUD();
      }
      return;
    }

    // Timed Buffs
    this.activateTimedBuff(type);
  }

  activateTimedBuff(type) {
    // If existing, clear previous timeout
    if (this.activeBuffs.has(type.id)) {
      clearTimeout(this.activeBuffs.get(type.id).timeout);
    }

    // Apply specific effect
    if (type.id === 'wide') {
      this.paddle.width = this.paddle.baseWidth * 1.5;
    } else if (type.id === 'fireball') {
      this.balls.forEach(b => b.fireball = true);
    } else if (type.id === 'shield') {
      this.hasShield = true;
    }

    const timeout = setTimeout(() => {
      this.deactivateBuff(type.id);
    }, type.duration);

    this.activeBuffs.set(type.id, {
      type: type,
      timeout: timeout,
      expiresAt: Date.now() + type.duration
    });

    this.updateBuffDisplay();
  }

  deactivateBuff(buffId) {
    if (!this.activeBuffs.has(buffId)) return;

    if (buffId === 'wide') {
      this.paddle.width = this.paddle.baseWidth;
    } else if (buffId === 'fireball') {
      this.balls.forEach(b => b.fireball = false);
    } else if (buffId === 'shield') {
      this.hasShield = false;
    }

    this.activeBuffs.delete(buffId);
    this.updateBuffDisplay();
  }

  clearAllBuffs() {
    this.activeBuffs.forEach(buff => clearTimeout(buff.timeout));
    this.activeBuffs.clear();
    this.updateBuffDisplay();
  }

  updateBuffDisplay() {
    const container = document.getElementById('buff-slot-container');
    if (!container) return;

    if (this.activeBuffs.size === 0 && !this.hasShield) {
      container.innerHTML = '<span class="no-buffs">None</span>';
      return;
    }

    container.innerHTML = '';
    this.activeBuffs.forEach((buff) => {
      const badge = document.createElement('span');
      badge.className = 'buff-badge';
      badge.style.color = buff.type.color;
      badge.innerHTML = `<span>${buff.type.icon}</span> <span>${buff.type.id.toUpperCase()}</span>`;
      container.appendChild(badge);
    });

    if (this.hasShield && !this.activeBuffs.has('shield')) {
      const shieldBadge = document.createElement('span');
      shieldBadge.className = 'buff-badge';
      shieldBadge.style.color = '#A855F7';
      shieldBadge.innerHTML = `<span>🛡️</span> <span>SHIELD</span>`;
      container.appendChild(shieldBadge);
    }
  }

  // Laser firing
  fireLaser() {
    if (!this.activeBuffs.has('laser')) return;

    const now = Date.now();
    if (now - this.lastLaserFired < 220) return; // Fire rate limit
    this.lastLaserFired = now;

    window.soundFX.playLaserShot();

    // Dual lasers from left and right of paddle
    this.lasers.push({
      x: this.paddle.x + 12,
      y: this.paddle.y - 6,
      width: 4,
      height: 16,
      speed: 16
    });

    this.lasers.push({
      x: this.paddle.x + this.paddle.width - 16,
      y: this.paddle.y - 6,
      width: 4,
      height: 16,
      speed: 16
    });

    this.spawnShockwave(this.paddle.x + 14, this.paddle.y, '#EF4444');
    this.spawnShockwave(this.paddle.x + this.paddle.width - 14, this.paddle.y, '#EF4444');
  }

  // ------------------------------------------
  // Life Loss & Game Over
  // ------------------------------------------
  loseLife() {
    this.lives--;
    window.soundFX.playBallLost();
    this.updateHUD();

    if (this.lives <= 0) {
      this.triggerGameOver();
    } else {
      // Spawn new ball on paddle
      this.spawnBall(true, LEVEL_DATA[this.currentLevelIndex].ballSpeed);
      const hint = document.getElementById('launch-hint');
      if (hint) hint.classList.add('visible');
    }
  }

  triggerGameOver() {
    this.state = 'GAMEOVER';
    window.soundFX.playGameOver();

    // Update High Score
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('cyberbreaker_highscore', this.highScore);
    }

    document.getElementById('go-score').textContent = this.formatNumber(this.score);
    document.getElementById('go-combo').textContent = `x${this.maxComboReached}`;
    document.getElementById('go-bricks').textContent = this.bricksDestroyedTotal;

    this.showOverlay('overlay-gameover');
  }

  triggerVictory() {
    this.state = 'VICTORY';
    window.soundFX.playVictory();

    const stageTime = Math.max(1, Math.round((Date.now() - this.stageStartTime) / 1000));
    const lifeBonus = this.lives * 500;
    this.score += lifeBonus;

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('cyberbreaker_highscore', this.highScore);
    }

    document.getElementById('vic-score').textContent = this.formatNumber(this.score);
    document.getElementById('vic-bonus').textContent = `+${this.formatNumber(lifeBonus)}`;
    document.getElementById('vic-time').textContent = `${stageTime}s`;

    // Unlock next level in storage
    const unlocked = Math.max(
      parseInt(localStorage.getItem('cyberbreaker_unlocked') || '1', 10),
      this.currentLevelIndex + 2
    );
    localStorage.setItem('cyberbreaker_unlocked', unlocked);
    this.renderLevelSelectGrid();

    this.showOverlay('overlay-victory');
  }

  // ------------------------------------------
  // Pause & Resume
  // ------------------------------------------
  togglePause() {
    if (this.state === 'PLAYING') {
      this.state = 'PAUSED';
      this.showOverlay('overlay-pause');
    } else if (this.state === 'PAUSED') {
      this.resumeGame();
    }
  }

  resumeGame() {
    this.state = 'PLAYING';
    this.lastFrameTime = performance.now();
    this.hideAllOverlays();
  }

  // ------------------------------------------
  // Overlay Management
  // ------------------------------------------
  showOverlay(overlayId) {
    this.hideAllOverlays();
    const el = document.getElementById(overlayId);
    if (el) el.classList.add('active');
  }

  hideAllOverlays() {
    document.querySelectorAll('.game-overlay').forEach(el => el.classList.remove('active'));
  }

  // ------------------------------------------
  // Floating UI Notifications
  // ------------------------------------------
  showFloatingText(text, x, y) {
    const float = document.createElement('div');
    float.className = 'float-score';
    if (text.startsWith('COMBO')) float.classList.add('combo');

    float.textContent = text;
    float.style.left = `${(x / CANVAS_WIDTH) * 100}%`;
    float.style.top = `${(y / CANVAS_HEIGHT) * 100}%`;

    this.floatingLayer.appendChild(float);
    setTimeout(() => {
      float.remove();
    }, 900);
  }

  // ------------------------------------------
  // Particle & FX Generators
  // ------------------------------------------
  spawnDebris(x, y, color, count = 8) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 1.5;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 2,
        color: color,
        life: 1.0,
        decay: Math.random() * 1.5 + 1.2,
        gravity: 0.15
      });
    }
  }

  spawnPaddleSparkles(x, y) {
    for (let i = 0; i < 6; i++) {
      this.particles.push({
        x: x + (Math.random() * 10 - 5),
        y: y - 2,
        vx: (Math.random() - 0.5) * 4,
        vy: -(Math.random() * 3 + 2),
        size: Math.random() * 2.5 + 1.5,
        color: this.theme.accentBright,
        life: 0.8,
        decay: 2.2,
        gravity: 0.05
      });
    }
  }

  spawnShockwave(x, y, color) {
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * 3.5,
        vy: Math.sin(angle) * 3.5,
        size: 2,
        color: color,
        life: 0.6,
        decay: 2.0,
        gravity: 0
      });
    }
  }

  // ------------------------------------------
  // Drawing & Canvas Graphics
  // ------------------------------------------
  draw() {
    this.ctx.save();

    // Screen Shake Offset
    if (this.screenShake > 0) {
      const shakeX = (Math.random() - 0.5) * this.screenShake;
      const shakeY = (Math.random() - 0.5) * this.screenShake;
      this.ctx.translate(shakeX, shakeY);
    }

    // Clear Canvas
    this.ctx.fillStyle = '#06080D';
    this.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw Subtle Cyber Tech Grid in Background
    this.drawBackgroundGrid();

    // Draw Floor Energy Shield if active
    if (this.hasShield) {
      this.drawFloorShield();
    }

    // Draw Bricks
    this.drawBricks();

    // Draw Falling Power-ups
    this.drawPowerups();

    // Draw Lasers
    this.drawLasers();

    // Draw Particles
    this.drawParticles();

    // Draw Paddle
    this.drawPaddle();

    // Draw Balls
    this.drawBalls();

    this.ctx.restore();
  }

  drawBackgroundGrid() {
    this.ctx.save();
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    this.ctx.lineWidth = 1;

    const step = 40;
    for (let x = 0; x < CANVAS_WIDTH; x += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, CANVAS_HEIGHT);
      this.ctx.stroke();
    }
    for (let y = 0; y < CANVAS_HEIGHT; y += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(CANVAS_WIDTH, y);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  drawFloorShield() {
    this.ctx.save();
    this.ctx.strokeStyle = '#A855F7';
    this.ctx.shadowColor = '#A855F7';
    this.ctx.shadowBlur = 15;
    this.ctx.lineWidth = 3;

    this.ctx.beginPath();
    this.ctx.moveTo(0, CANVAS_HEIGHT - 4);
    this.ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT - 4);
    this.ctx.stroke();

    // Hex pattern glow
    this.ctx.fillStyle = 'rgba(168, 85, 247, 0.1)';
    this.ctx.fillRect(0, CANVAS_HEIGHT - 12, CANVAS_WIDTH, 8);

    this.ctx.restore();
  }

  getBrickColor(brick) {
    if (brick.indestructible) return this.theme.steel;
    if (brick.isBomb) return this.theme.bomb;
    if (brick.isMystery) return this.theme.mystery;
    if (brick.maxHp === 3) {
      return brick.hp === 3 ? this.theme.brick3 : brick.hp === 2 ? this.theme.brick2 : this.theme.brick1;
    }
    if (brick.maxHp === 2) {
      return brick.hp === 2 ? this.theme.brick2 : this.theme.brick1;
    }
    return this.theme.brick1;
  }

  drawBricks() {
    for (let i = 0; i < this.bricks.length; i++) {
      const b = this.bricks[i];
      const color = this.getBrickColor(b);

      this.ctx.save();

      // Rounded brick box
      const radius = 4;
      this.ctx.beginPath();
      this.ctx.roundRect(b.x, b.y, b.width, b.height, radius);

      // Gradient Fill
      const grad = this.ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.height);
      grad.addColorStop(0, color);
      grad.addColorStop(1, this.shadeColor(color, -25));
      this.ctx.fillStyle = grad;
      this.ctx.fill();

      // Stroke & Glow
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      this.ctx.stroke();

      // Inner Tech Markings
      if (b.isBomb) {
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 11px Orbitron, monospace';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('TNT', b.x + b.width / 2, b.y + b.height / 2 + 1);
      } else if (b.isMystery) {
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 12px Orbitron, monospace';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('?', b.x + b.width / 2, b.y + b.height / 2 + 1);
      } else if (b.indestructible) {
        // Steel cross pattern
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.beginPath();
        this.ctx.moveTo(b.x + 4, b.y + 4);
        this.ctx.lineTo(b.x + b.width - 4, b.y + b.height - 4);
        this.ctx.moveTo(b.x + b.width - 4, b.y + 4);
        this.ctx.lineTo(b.x + 4, b.y + b.height - 4);
        this.ctx.stroke();
      } else if (b.maxHp > 1 && b.hp < b.maxHp) {
        // Cracks indication
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(b.x + b.width * 0.3, b.y + 2);
        this.ctx.lineTo(b.x + b.width * 0.45, b.y + b.height * 0.6);
        this.ctx.lineTo(b.x + b.width * 0.7, b.y + b.height - 2);
        this.ctx.stroke();
      }

      this.ctx.restore();
    }
  }

  drawPaddle() {
    this.ctx.save();

    // Laser mount wings if laser active
    if (this.activeBuffs.has('laser')) {
      this.ctx.fillStyle = '#EF4444';
      this.ctx.fillRect(this.paddle.x + 6, this.paddle.y - 6, 8, 8);
      this.ctx.fillRect(this.paddle.x + this.paddle.width - 14, this.paddle.y - 6, 8, 8);
    }

    // Outer Glow
    this.ctx.shadowColor = this.theme.glow;
    this.ctx.shadowBlur = 18;

    // Paddle Body with rounded pill shape
    this.ctx.beginPath();
    this.ctx.roundRect(this.paddle.x, this.paddle.y, this.paddle.width, this.paddle.height, 7);

    // Gradient
    const paddleGrad = this.ctx.createLinearGradient(
      this.paddle.x,
      this.paddle.y,
      this.paddle.x,
      this.paddle.y + this.paddle.height
    );
    paddleGrad.addColorStop(0, this.theme.accentBright);
    paddleGrad.addColorStop(0.5, this.theme.paddle);
    paddleGrad.addColorStop(1, this.theme.accentDark);

    this.ctx.fillStyle = paddleGrad;
    this.ctx.fill();

    // Cyber edge borders
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.stroke();

    // Center Core Light
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.beginPath();
    this.ctx.roundRect(this.paddle.x + this.paddle.width / 2 - 12, this.paddle.y + 4, 24, 5, 2);
    this.ctx.fill();

    this.ctx.restore();
  }

  drawBalls() {
    this.balls.forEach(ball => {
      this.ctx.save();

      // Comet Tail Trail
      if (ball.trail.length > 1) {
        for (let i = 0; i < ball.trail.length; i++) {
          const tPoint = ball.trail[i];
          const opacity = (i / ball.trail.length) * 0.35;
          const r = ball.radius * (0.3 + (i / ball.trail.length) * 0.7);

          this.ctx.fillStyle = ball.fireball ? `rgba(249, 115, 22, ${opacity})` : this.theme.ballTrail;
          this.ctx.beginPath();
          this.ctx.arc(tPoint.x, tPoint.y, r, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }

      // Ball Core
      this.ctx.shadowColor = ball.fireball ? 'rgba(249, 115, 22, 0.8)' : this.theme.glow;
      this.ctx.shadowBlur = ball.fireball ? 20 : 14;

      this.ctx.beginPath();
      this.ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);

      const grad = this.ctx.createRadialGradient(
        ball.x - 2,
        ball.y - 2,
        1,
        ball.x,
        ball.y,
        ball.radius
      );
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.6, ball.fireball ? '#F97316' : this.theme.accentBright);
      grad.addColorStop(1, ball.fireball ? '#EA580C' : this.theme.accent);

      this.ctx.fillStyle = grad;
      this.ctx.fill();

      this.ctx.restore();
    });
  }

  drawPowerups() {
    this.powerups.forEach(p => {
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);

      // Outer Glow Pill
      this.ctx.shadowColor = p.type.color;
      this.ctx.shadowBlur = 12;

      this.ctx.fillStyle = 'rgba(10, 14, 22, 0.9)';
      this.ctx.strokeStyle = p.type.color;
      this.ctx.lineWidth = 2;

      this.ctx.beginPath();
      this.ctx.roundRect(-12, -12, 24, 24, 6);
      this.ctx.fill();
      this.ctx.stroke();

      // Icon
      this.ctx.fillStyle = p.type.color;
      this.ctx.font = '12px Outfit, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(p.type.icon, 0, 0);

      this.ctx.restore();
    });
  }

  drawLasers() {
    this.ctx.save();
    this.lasers.forEach(l => {
      this.ctx.shadowColor = '#EF4444';
      this.ctx.shadowBlur = 10;
      this.ctx.fillStyle = '#F87171';
      this.ctx.fillRect(l.x, l.y, l.width, l.height);

      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.fillRect(l.x + 1, l.y + 2, l.width - 2, l.height - 4);
    });
    this.ctx.restore();
  }

  drawParticles() {
    this.ctx.save();
    this.particles.forEach(p => {
      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.restore();
  }

  // ------------------------------------------
  // Level Select Grid Generator
  // ------------------------------------------
  renderLevelSelectGrid() {
    const grid = document.getElementById('level-selection-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const unlockedLevel = parseInt(localStorage.getItem('cyberbreaker_unlocked') || '1', 10);

    LEVEL_DATA.forEach((lvl, idx) => {
      const card = document.createElement('div');
      const isLocked = idx + 1 > unlockedLevel;
      card.className = `level-card ${idx === this.currentLevelIndex ? 'current' : ''} ${isLocked ? 'locked' : ''}`;

      card.innerHTML = `
        <span class="level-num">${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
        <span class="level-name">${lvl.name}</span>
        <span class="level-stars">${isLocked ? '🔒 LOCKED' : '★★★'}</span>
      `;

      if (!isLocked) {
        card.addEventListener('click', () => {
          this.startLevel(idx);
          this.hideAllOverlays();
        });
      }

      grid.appendChild(card);
    });
  }

  // ------------------------------------------
  // Helper Utilities
  // ------------------------------------------
  updateHUD() {
    const levelEl = document.getElementById('hud-level');
    const levelNameEl = document.getElementById('hud-level-name');
    const scoreEl = document.getElementById('hud-score');
    const highScoreEl = document.getElementById('hud-high-score');
    const livesEl = document.getElementById('hud-lives');

    if (levelEl) {
      const num = this.currentLevelIndex + 1;
      levelEl.textContent = num < 10 ? `0${num}` : `${num}`;
    }
    if (levelNameEl) {
      levelNameEl.textContent = LEVEL_DATA[this.currentLevelIndex].name;
    }
    if (scoreEl) {
      scoreEl.textContent = this.formatNumber(this.score);
    }
    if (highScoreEl) {
      highScoreEl.textContent = `HIGH: ${this.formatNumber(this.highScore)}`;
    }

    if (livesEl) {
      livesEl.innerHTML = '';
      for (let i = 0; i < 3; i++) {
        const pip = document.createElement('span');
        pip.className = `life-pip ${i < this.lives ? 'active' : ''}`;
        livesEl.appendChild(pip);
      }
    }
  }

  saveProgress(levelIdx) {
    localStorage.setItem('cyberbreaker_lastlevel', levelIdx);
  }

  formatNumber(num) {
    return num.toLocaleString('en-US');
  }

  shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    R = Math.round(R);
    G = Math.round(G);
    B = Math.round(B);

    const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16));

    return '#' + RR + GG + BB;
  }
}

// Instantiate game on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.cyberGame = new CyberBreakerGame();
});
