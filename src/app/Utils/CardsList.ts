export const products: Product[] = [
  {
    id: 1,
    title: 'Smartphone X12',
    slug: 'smartphone-x12',
    price: 799,
    brand: 'TechMobile',
    category: 'Smartphones',
    img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno-12-pro-en/navigation/440-440-gold.png.thumb.webp",
    description: "Experience cutting-edge technology with the Smartphone X12. Featuring a stunning 6.5-inch OLED display and a powerful AI-driven camera system.",
    specs: {
      display: "6.5-inch OLED",
      processor: "Octa-core 2.5GHz",
      ram: "8GB",
      storage: "256GB",
      camera: "Triple lens: 48MP main, 12MP ultra-wide, 8MP telephoto",
      battery: "4500mAh"
    }
  },
  {
    id: 2,
    title: 'Laptop Pro 15',
    slug: 'laptop-pro-15',
    price: 1299,
    brand: 'TechBook',
    category: 'Laptops',
    img: "https://www.ilifestore.in/wp-content/uploads/2024/05/gaming-laptops-og-image.webp",
    description: "Unleash your productivity with the Laptop Pro 15. Slim, powerful, and built for professionals.",
    specs: {
      display: "15.6-inch 4K IPS",
      processor: "Intel Core i7-11800H",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      graphics: "NVIDIA RTX 3060 6GB",
      battery: "8 hours average use"
    }
  },
  {
    id: 3,
    title: 'Wireless Earbuds Z1',
    slug: 'wireless-earbuds-z1',
    price: 149,
    brand: 'AudioTech',
    category: 'Audio',
    img: "https://5.imimg.com/data5/SELLER/Default/2024/3/398833580/NI/PN/ZR/10698546/noise-wireless-earbuds-500x500.jpeg",
    description: "Immerse yourself in crystal-clear sound with the Wireless Earbuds Z1. Features active noise cancellation and 24-hour battery life.",
    specs: {
      type: "True Wireless",
      batteryLife: "8 hours (24 with case)",
      noiseCancellation: "Active",
      waterResistance: "IPX4",
      connectivity: "Bluetooth 5.2"
    }
  },
  {
    id: 4,
    title: '4K Smart TV 55"',
    slug: '4k-smart-tv-55',
    price: 699,
    brand: 'ViewMax',
    category: 'TVs',
    img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/television/m/j/r/-original-imagqcn8syfrgdcu.jpeg?q=90&crop=false",
    description: "Transform your living room with this 55-inch 4K Smart TV. Vibrant colors, smart features, and sleek design.",
    specs: {
      resolution: "4K Ultra HD (3840 x 2160)",
      hdrSupport: "HDR10, Dolby Vision",
      smartPlatform: "Android TV",
      refresh: "120Hz",
      audio: "20W, Dolby Atmos"
    }
  },
  {
    id: 5,
    title: 'Gaming Console NextGen',
    slug: 'gaming-console-nextgen',
    price: 499,
    brand: 'GameTech',
    category: 'Gaming',
    img: "https://5.imimg.com/data5/SELLER/Default/2023/8/338900660/MI/FV/IV/195687344/gaming-console.jpg",
    description: "Step into the future of gaming with the NextGen console. Featuring ray tracing, 4K gaming, and lightning-fast load times.",
    specs: {
      cpu: "Custom 8-core AMD Zen 2",
      gpu: "Custom AMD RDNA 2",
      storage: "1TB Custom NVMe SSD",
      resolution: "Up to 8K",
      frameRate: "Up to 120 fps"
    }
  },
  {
    id: 6,
    title: 'Smartwatch Fit Pro',
    slug: 'smartwatch-fit-pro',
    price: 299,
    brand: 'TechWear',
    category: 'Wearables',
    img: "https://cdn.mos.cms.futurecdn.net/FkGweMeB7hdPgaSFQdgsfj-1200-80.jpg",
    description: "Stay fit and connected with the Smartwatch Fit Pro. Advanced health tracking meets smart notifications.",
    specs: {
      display: "1.4-inch AMOLED",
      battery: "Up to 14 days",
      sensors: "Heart rate, SpO2, GPS",
      waterResistance: "5 ATM",
      compatibility: "iOS and Android"
    }
  },
  {
    id: 7,
    title: 'Wireless Router AX6000',
    slug: 'wireless-router-ax6000',
    price: 249,
    brand: 'NetPro',
    category: 'Networking',
    img: "https://www.netgear.com/zone1/cid/fit/1024x633/https/www.netgear.com/dk/media/XR1000_1_tcm164-107852.jpg",
    description: "Experience lightning-fast internet with the AX6000 router. Wi-Fi 6 technology for seamless 8K streaming and gaming.",
    specs: {
      wifiStandard: "Wi-Fi 6 (802.11ax)",
      speed: "Up to 6000 Mbps",
      coverage: "Up to 3,000 sq ft",
      ports: "1 WAN, 4 LAN Gigabit Ethernet",
      security: "WPA3, VPN support"
    }
  },
  {
    id: 8,
    title: 'Mirrorless Camera X-Pro',
    slug: 'mirrorless-camera-x-pro',
    price: 1499,
    brand: 'PhotoTech',
    category: 'Cameras',
    img: "https://imgeng.jagran.com/images/2023/sep/best%20nikon%20cameras%20for%20photography%20ci1694172900406.jpg",
    description: "Capture life's moments in stunning detail with the X-Pro mirrorless camera. Professional-grade features in a compact body.",
    specs: {
      sensor: "24.1MP APS-C CMOS",
      iso: "100-51,200 (expandable to 204,800)",
      videoResolution: "4K at 60fps",
      autofocus: "425-point hybrid AF",
      stabilization: "5-axis in-body"
    }
  },
  {
    id: 9,
    title: 'Portable SSD 1TB',
    slug: 'portable-ssd-1tb',
    price: 179,
    brand: 'DataMax',
    category: 'Storage',
    img: "https://img.ltwebstatic.com/images3_spmp/2024/02/29/03/17091886595baecaa5a79c1736b65781c3ab75cee4_thumbnail_720x.jpg",
    description: "Store and transfer files at lightning speed with this 1TB portable SSD. Compact, durable, and secure.",
    specs: {
      capacity: "1TB",
      interface: "USB 3.2 Gen 2",
      readSpeed: "Up to 1050 MB/s",
      writeSpeed: "Up to 1000 MB/s",
      encryption: "256-bit AES"
    }
  },
  {
    id: 10,
    title: 'Smart Home Hub',
    slug: 'smart-home-hub',
    price: 129,
    brand: 'HomeTech',
    category: 'Smart Home',
    img: "https://blog.athom.com/wp-content/uploads/2019/01/image-2-1024x683.png",
    description: "Control your entire smart home with ease using this advanced Smart Home Hub. Compatible with multiple protocols for maximum flexibility.",
    specs: {
      compatibility: "Zigbee, Z-Wave, Wi-Fi, Bluetooth",
      voiceAssistants: "Alexa, Google Assistant, Siri",
      display: "7-inch touchscreen",
      connectivity: "Ethernet, Wi-Fi",
      powerBackup: "Built-in battery"
    }
  }
];

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  brand: string;
  category: string;
  img: string;
  description: string;
  specs: {
    [key: string]: string | number;
  };
}
