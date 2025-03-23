document.addEventListener('DOMContentLoaded', () => {
    // Create the orb container
    const orbContainer = document.createElement('div');
    orbContainer.className = 'orb-container';
    document.body.appendChild(orbContainer);
    
    // Configuration
    const config = {
        orbCount: 12,
        minSize: 40,
        maxSize: 250,
        minDuration: 30,
        maxDuration: 80
    };
    
    // Generate orbs
    for (let i = 0; i < config.orbCount; i++) {
        createOrb(orbContainer, config);
    }
    
    // Handle visibility changes
    document.addEventListener('visibilitychange', () => {
        const orbs = document.querySelectorAll('.orb');
        if (document.hidden) {
            orbs.forEach(orb => orb.style.animationPlayState = 'paused');
        } else {
            orbs.forEach(orb => orb.style.animationPlayState = 'running');
        }
    });
    
    // Periodically regenerate orbs to keep the experience fresh
    setInterval(() => {
        const randomOrb = document.querySelector(`.orb:nth-child(${Math.floor(Math.random() * config.orbCount) + 1})`);
        if (randomOrb) {
            randomOrb.remove();
            createOrb(orbContainer, config);
        }
    }, 10000); // Every 10 seconds
});

function createOrb(container, config) {
    const orb = document.createElement('div');
    orb.className = 'orb';
    
    // Random attributes
    const size = getRandomInRange(config.minSize, config.maxSize);
    
    // Position orbs anywhere - even slightly outside the screen
    const startX = getRandomInRange(-20, 120);
    const startY = getRandomInRange(-20, 120);
    const duration = getRandomInRange(config.minDuration, config.maxDuration);
    
    // Set styles
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.left = `${startX}%`;
    orb.style.top = `${startY}%`;
    orb.style.opacity = getRandomInRange(0.1, 0.3);
    
    // Create keyframe animation with random waypoints across the screen
    const animationName = `float-${Math.floor(Math.random() * 100000)}`;
    const keyframes = generateRandomMovementKeyframes(animationName);
    
    // Add keyframes to the document
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
    
    // Apply animation
    orb.style.animation = `${animationName} ${duration}s infinite ease-in-out alternate`;
    
    // Add to container
    container.appendChild(orb);
}

function generateRandomMovementKeyframes(name) {
    // Generate 5-8 random waypoints for more unpredictable movement
    const waypoints = Math.floor(getRandomInRange(5, 9));
    let keyframeCSS = `@keyframes ${name} {\n`;
    
    for (let i = 0; i < waypoints; i++) {
        const percent = Math.floor((i / (waypoints - 1)) * 100);
        const x = getRandomInRange(-20, 120); // Allow movement outside viewport
        const y = getRandomInRange(-20, 120);
        const scale = getRandomInRange(0.7, 1.3);
        const opacity = getRandomInRange(0.1, 0.4);
        
        keyframeCSS += `    ${percent}% {
        transform: translate(${x}%, ${y}%) scale(${scale});
        opacity: ${opacity};
    }\n`;
    }
    
    keyframeCSS += '}';
    return keyframeCSS;
}

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
} 