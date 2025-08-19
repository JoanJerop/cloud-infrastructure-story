/**
 * Cloud Infrastructure Story - Configuration File
 * 
 * This file contains all configurable settings for the application
 * including animation timings, layer definitions, and visual themes.
 * 
 * @author Your Name
 * @version 1.0.0
 */

// Animation and timing configuration
const ANIMATION_CONFIG = {
    // Speed of layer reveal animations (in milliseconds)
    layerRevealSpeed: 800,
    
    // Delay between auto-play layer reveals
    autoPlayDelay: 2500,
    
    // Initial delay before first layer shows
    initialDelay: 1000,
    
    // Final message reveal delay
    finalMessageDelay: 600,
    
    // Hover animation speed
    hoverTransitionSpeed: 300,
    
    // Progress bar update speed
    progressBarSpeed: 300,
    
    // Shimmer effect duration
    shimmerDuration: 600
};

// Layer definitions with metadata
const INFRASTRUCTURE_LAYERS = [
    {
        id: 1,
        emoji: "☁️",
        title: "Cloud Provider Region",
        description: "In the beginning, there is a Region in a Cloud Provider - a geographic area containing multiple data centers for redundancy and low latency.",
        technicalDetail: "Examples: us-east-1, eu-west-1, ap-southeast-1",
        category: "global",
        color: "#667eea",
        keywords: ["AWS", "Azure", "GCP", "region", "geography"]
    },
    {
        id: 2,
        emoji: "🏢",
        title: "Availability Zone",
        description: "Within that Region, there is an Availability Zone - an isolated location with independent power, cooling, and networking.",
        technicalDetail: "Purpose: High availability and fault tolerance",
        category: "regional",
        color: "#764ba2",
        keywords: ["AZ", "isolation", "redundancy", "disaster recovery"]
    },
    {
        id: 3,
        emoji: "🏭",
        title: "Data Center",
        description: "In that Availability Zone, there is a Data Center - a physical facility housing thousands of servers and networking equipment.",
        technicalDetail: "Infrastructure: Power, cooling, security, networking",
        category: "physical",
        color: "#8b5fbf",
        keywords: ["facility", "servers", "infrastructure", "physical"]
    },
    {
        id: 4,
        emoji: "🗄️",
        title: "Server Rack",
        description: "In that Data Center, there is a Server Rack - a standardized frame housing multiple servers in an organized manner.",
        technicalDetail: "Standard: 19-inch rack, 42U height",
        category: "physical",
        color: "#9d5bd2",
        keywords: ["rack", "19-inch", "42U", "standardized"]
    },
    {
        id: 5,
        emoji: "🔗",
        title: "Private Network",
        description: "In that Server Rack, there is a Private Network - secure networking infrastructure connecting all the physical components.",
        technicalDetail: "Protocols: VLANs, VPCs, private subnets",
        category: "networking",
        color: "#a855f7",
        keywords: ["VLAN", "VPC", "subnet", "networking", "security"]
    },
    {
        id: 6,
        emoji: "💻",
        title: "Physical Host",
        description: "In that Private Network, there is a Physical Host - the actual server hardware with CPU, RAM, and storage.",
        technicalDetail: "Hardware: Multi-core CPUs, RAM, SSDs, network cards",
        category: "hardware",
        color: "#b247f5",
        keywords: ["CPU", "RAM", "SSD", "hardware", "server"]
    },
    {
        id: 7,
        emoji: "🖥️",
        title: "Virtual Machine",
        description: "In that Physical Host, there is a Virtual Machine - a software-based computer running on top of the physical hardware.",
        technicalDetail: "Hypervisors: VMware, KVM, Hyper-V",
        category: "virtualization",
        color: "#c44df0",
        keywords: ["VM", "hypervisor", "virtualization", "VMware", "KVM"]
    },
    {
        id: 8,
        emoji: "🏗️",
        title: "Kubernetes Cluster",
        description: "Those Virtual Machines form a Kubernetes cluster - an orchestration system for automating deployment and management of containerized applications.",
        technicalDetail: "Components: Master nodes, worker nodes, etcd",
        category: "orchestration",
        color: "#d946ef",
        keywords: ["K8s", "orchestration", "master", "worker", "etcd"]
    },
    {
        id: 9,
        emoji: "📦",
        title: "Kubernetes Node",
        description: "In that Kubernetes cluster, there is a Node - a worker machine (VM) that runs your application workloads.",
        technicalDetail: "Services: kubelet, kube-proxy, container runtime",
        category: "orchestration",
        color: "#e879f9",
        keywords: ["node", "kubelet", "kube-proxy", "runtime"]
    },
    {
        id: 10,
        emoji: "🚀",
        title: "Deployment",
        description: "In that Node, there is a Deployment - a Kubernetes object that manages the deployment and scaling of your application.",
        technicalDetail: "Features: Rolling updates, rollbacks, scaling",
        category: "application",
        color: "#f0abfc",
        keywords: ["deployment", "rolling update", "scaling", "rollback"]
    },
    {
        id: 11,
        emoji: "📋",
        title: "ReplicaSet",
        description: "In that Deployment, there is a ReplicaSet - ensures a specified number of pod replicas are running at any given time.",
        technicalDetail: "Purpose: High availability and load distribution",
        category: "application",
        color: "#f3e8ff",
        keywords: ["replica", "availability", "load balancing"]
    },
    {
        id: 12,
        emoji: "🫛",
        title: "Pod",
        description: "In that ReplicaSet, there is a Pod - the smallest deployable unit in Kubernetes, containing one or more containers.",
        technicalDetail: "Resources: Shared network, storage volumes",
        category: "application",
        color: "#fae8ff",
        keywords: ["pod", "container", "shared network", "volumes"]
    },
    {
        id: 13,
        emoji: "📦",
        title: "Container",
        description: "In that Pod, there is a Container - a lightweight, portable, and self-sufficient package containing your application and its dependencies.",
        technicalDetail: "Runtime: Docker, containerd, CRI-O",
        category: "application",
        color: "#fdf4ff",
        keywords: ["Docker", "containerd", "portable", "dependencies"]
    },
    {
        id: 14,
        emoji: "⚡",
        title: "Process",
        description: "In that Container, there is a process executing your application code...",
        technicalDetail: "The actual running application instance",
        category: "application",
        color: "#fff",
        keywords: ["process", "application", "execution", "runtime"]
    }
];

// Visual theme configuration
const THEME_CONFIG = {
    // Primary color scheme
    primaryGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    
    // Accent colors
    accentGold: "#ffd700",
    accentRed: "#ff6b6b",
    accentOrange: "#feca57",
    
    // Glass morphism settings
    glassBackground: "rgba(255, 255, 255, 0.1)",
    glassBackgroundHover: "rgba(255, 255, 255, 0.15)",
    glassBorder: "rgba(255, 255, 255, 0.2)",
    glassBlur: "15px",
    
    // Animation easing
    easeOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.6, 1)",
    
    // Responsive breakpoints
    breakpoints: {
        mobile: "480px",
        tablet: "768px",
        desktop: "1024px"
    }
};

// Application behavior settings
const APP_CONFIG = {
    // Enable/disable features
    enableAutoPlay: true,
    enableKeyboardShortcuts: true,
    enableProgressBar: true,
    enableSoundEffects: false, // Future feature
    
    // Accessibility settings
    respectReducedMotion: true,
    highContrastMode: false,
    
    // Performance settings
    maxConcurrentAnimations: 3,
    enableDebugMode: false,
    
    // Analytics (if implemented)
    trackUserInteractions: false,
    
    // Language settings (for future internationalization)
    defaultLanguage: "en",
    availableLanguages: ["en"],
    
    // Version information
    version: "1.0.0",
    buildDate: new Date().toISOString(),
    author: "Your Name"
};

// Keyboard shortcuts configuration
const KEYBOARD_SHORTCUTS = {
    nextLayer: [" ", "ArrowRight", "Enter"],
    previousLayer: ["ArrowLeft"],
    reset: ["r", "R"],
    autoPlay: ["a", "A"],
    showAll: ["s", "S"],
    toggleHelp: ["h", "H", "?"]
};

// Messages and content
const MESSAGES = {
    finalMessage: {
        title: "🎉 The process says:",
        content: '"Hello World! 😊"',
        subtitle: "From global cloud infrastructure to a simple greeting - this is the modern application stack!"
    },
    
    loading: {
        title: "Loading Cloud Infrastructure Story...",
        subtitle: "Preparing your journey through the stack"
    },
    
    errors: {
        browserNotSupported: "Your browser doesn't support some features. Please update for the best experience.",
        animationError: "Animation error occurred. Try refreshing the page."
    }
};

// Export configuration for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        ANIMATION_CONFIG,
        INFRASTRUCTURE_LAYERS,
        THEME_CONFIG,
        APP_CONFIG,
        KEYBOARD_SHORTCUTS,
        MESSAGES
    };
} else {
    // Browser environment - make available globally
    window.CloudConfig = {
        ANIMATION_CONFIG,
        INFRASTRUCTURE_LAYERS,
        THEME_CONFIG,
        APP_CONFIG,
        KEYBOARD_SHORTCUTS,
        MESSAGES
    };
}