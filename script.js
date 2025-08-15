// Global variables
let currentLayer = 0;
let autoPlayInterval = null;
let isAutoPlaying = false;

// DOM elements
const layers = document.querySelectorAll('.layer');
const finalMessage = document.getElementById('finalMessage');
const progressBar = document.getElementById('progressBar');
const totalLayers = layers.length;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    setupEventListeners();
    updateProgress();
    
    // Auto-start first layer after a delay
    setTimeout(() => {
        showNextLayer();
    }, 1000);
    
    // Continue animation every 2.5 seconds if not manually interacted
    setTimeout(() => {
        if (currentLayer < totalLayers) {
            autoPlayInterval = setInterval(() => {
                if (currentLayer < totalLayers && !isAutoPlaying) {
                    showNextLayer();
                }
            }, 2500);
        }
    }, 3000);
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
    // Add click and keyboard event listeners to layers
    layers.forEach((layer, index) => {
        layer.addEventListener('click', () => {
            handleLayerInteraction(index);
        });
        
        layer.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLayerInteraction(index);
            }
        });
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

/**
 * Handle layer interaction (click or keyboard)
 */
function handleLayerInteraction(layerIndex) {
    // Stop auto-play when user interacts
    clearAutoPlay();
    
    // If clicking on the current layer or next, show next
    if (layerIndex >= currentLayer - 1) {
        showNextLayer();
    }
}

/**
 * Handle keyboard shortcuts
 */
function handleKeyboardShortcuts(e) {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
            e.preventDefault();
            showNextLayer();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            showPreviousLayer();
            break;
        case 'r':
        case 'R':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                resetAnimation();
            }
            break;
        case 'a':
        case 'A':
            e.preventDefault();
            autoPlay();
            break;
        case 's':
        case 'S':
            e.preventDefault();
            showAllLayers();
            break;
    }
}

/**
 * Update progress bar
 */
function updateProgress() {
    const progress = (currentLayer / totalLayers) * 100;
    progressBar.style.width = progress + '%';
}

/**
 * Show next layer in sequence
 */
function showNextLayer() {
    if (currentLayer < layers.length) {
        layers[currentLayer].classList.add('visible');
        currentLayer++;
        updateProgress();
        
        // Show final message when all layers are revealed
        if (currentLayer === layers.length) {
            setTimeout(() => {
                finalMessage.classList.add('visible');
                progressBar.style.width = '100%';
                clearAutoPlay();
            }, 600);
        }
    }
}

/**
 * Show previous layer (for accessibility)
 */
function showPreviousLayer() {
    if (currentLayer > 0) {
        currentLayer--;
        layers[currentLayer].classList.remove('visible');
        
        if (finalMessage.classList.contains('visible')) {
            finalMessage.classList.remove('visible');
        }
        
        updateProgress();
    }
}

/**
 * Show all layers at once
 */
function showAllLayers() {
    clearAutoPlay();
    
    layers.forEach((layer, index) => {
        setTimeout(() => {
            layer.classList.add('visible');
        }, index * 150);
    });
    
    currentLayer = layers.length;
    
    setTimeout(() => {
        finalMessage.classList.add('visible');
        progressBar.style.width = '100%';
    }, layers.length * 150 + 300);
}

/**
 * Reset animation to beginning
 */
function resetAnimation() {
    clearAutoPlay();
    
    // Remove visible class from all layers
    layers.forEach(layer => {
        layer.classList.remove('visible');
    });
    
    finalMessage.classList.remove('visible');
    currentLayer = 0;
    progressBar.style.width = '0%';
    
    // Restart after a brief pause
    setTimeout(() => {
        showNextLayer();
    }, 500);
}

/**
 * Auto play animation
 */
function autoPlay() {
    clearAutoPlay();
    resetAnimation();
    
    isAutoPlaying = true;
    let layerIndex = 0;
    
    const autoPlayLoop = () => {
        if (layerIndex < layers.length) {
            layers[layerIndex].classList.add('visible');
            layerIndex++;
            currentLayer = layerIndex;
            updateProgress();
            
            autoPlayInterval = setTimeout(autoPlayLoop, 800);
        } else {
            // Show final message
            setTimeout(() => {
                finalMessage.classList.add('visible');
                progressBar.style.width = '100%';
                isAutoPlaying = false;
            }, 600);
        }
    };
    
    // Start auto play after reset
    setTimeout(autoPlayLoop, 600);
}

/**
 * Clear auto play interval
 */
function clearAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        clearTimeout(autoPlayInterval);
        autoPlayInterval = null;
    }
    isAutoPlaying = false;
}

/**
 * Utility function to add smooth scroll behavior
 */
function scrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

/**
 * Handle visibility changes (pause auto-play when tab is not active)
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        clearAutoPlay();
    }
});

/**
 * Analytics and performance monitoring (optional)
 */
function trackInteraction(action) {
    // This is where you could add analytics tracking
    console.log(`User interaction: ${action}`);
}

// Expose functions globally for HTML onclick handlers
window.showAllLayers = showAllLayers;
window.resetAnimation = resetAnimation;
window.autoPlay = autoPlay;