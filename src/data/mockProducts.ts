export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
  description: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 2840,
    image: "📱",
    category: "smartphones",
    badge: "Best Seller",
    description: "The most powerful iPhone ever with A17 Pro chip and titanium design.",
    inStock: true,
  },
  {
    id: 2,
    name: 'MacBook Pro 14" M3 Chip',
    price: 1999,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 1256,
    image: "💻",
    category: "laptops",
    badge: "New",
    description: "Supercharged by M3 Pro or M3 Max for exceptional performance.",
    inStock: true,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: 349,
    originalPrice: 399,
    rating: 4.7,
    reviews: 3421,
    image: "🎧",
    category: "audio",
    description: "Industry-leading noise cancellation with crystal clear audio.",
    inStock: true,
  },
  {
    id: 4,
    name: 'Samsung 65" 4K Smart TV',
    price: 899,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 892,
    image: "📺",
    category: "televisions",
    badge: "Hot Deal",
    description: "Stunning 4K resolution with smart features and voice control.",
    inStock: true,
  },
  {
    id: 5,
    name: "Apple Watch Ultra 2",
    price: 799,
    rating: 4.9,
    reviews: 1567,
    image: "⌚",
    category: "wearables",
    description: "The most rugged and capable Apple Watch for adventure.",
    inStock: true,
  },
  {
    id: 6,
    name: "DJI Mini 3 Pro Drone",
    price: 759,
    originalPrice: 849,
    rating: 4.7,
    reviews: 654,
    image: "🚁",
    category: "cameras",
    description: "Lightweight drone with 4K video and obstacle avoidance.",
    inStock: false,
  },
  {
    id: 7,
    name: "Canon EOS R6 Mark II",
    price: 2499,
    rating: 4.8,
    reviews: 421,
    image: "📷",
    category: "cameras",
    description: "Professional mirrorless camera with exceptional autofocus.",
    inStock: true,
  },
  {
    id: 8,
    name: "LG French Door Refrigerator",
    price: 1599,
    originalPrice: 1899,
    rating: 4.5,
    reviews: 234,
    image: "🧊",
    category: "appliances",
    badge: "-16%",
    description: "Smart refrigerator with InstaView door and craft ice maker.",
    inStock: true,
  },
  {
    id: 9,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 1892,
    image: "📱",
    category: "smartphones",
    badge: "Popular",
    description: "AI-powered smartphone with S Pen and 200MP camera.",
    inStock: true,
  },
  {
    id: 10,
    name: "iPad Pro 12.9\" M2",
    price: 1099,
    rating: 4.9,
    reviews: 2103,
    image: "📱",
    category: "tablets",
    description: "The ultimate iPad experience with M2 chip and Liquid Retina XDR.",
    inStock: true,
  },
  {
    id: 11,
    name: "Dyson V15 Detect Vacuum",
    price: 749,
    originalPrice: 849,
    rating: 4.7,
    reviews: 567,
    image: "🧹",
    category: "appliances",
    description: "Laser reveals microscopic dust with intelligent power adjustment.",
    inStock: true,
  },
  {
    id: 12,
    name: "Bose SoundLink Max Speaker",
    price: 399,
    rating: 4.6,
    reviews: 789,
    image: "🔊",
    category: "audio",
    badge: "New",
    description: "Powerful portable speaker with immersive 360° sound.",
    inStock: true,
  },
];

export const mockCategories: Category[] = [
  { id: "smartphones", name: "Smartphones", icon: "📱", productCount: 120 },
  { id: "laptops", name: "Laptops", icon: "💻", productCount: 85 },
  { id: "televisions", name: "Televisions", icon: "📺", productCount: 65 },
  { id: "audio", name: "Audio", icon: "🎧", productCount: 95 },
  { id: "cameras", name: "Cameras", icon: "📷", productCount: 45 },
  { id: "appliances", name: "Appliances", icon: "🧊", productCount: 200 },
  { id: "wearables", name: "Wearables", icon: "⌚", productCount: 75 },
  { id: "tablets", name: "Tablets", icon: "📱", productCount: 55 },
];

// Simulated API service (commented out for mock data usage)
// import axios from 'axios';
// 
// const API_BASE_URL = 'https://api.thozha.com/v1';
// 
// export const productService = {
//   async getProducts(): Promise<Product[]> {
//     const response = await axios.get(`${API_BASE_URL}/products`);
//     return response.data;
//   },
//   
//   async getProductById(id: number): Promise<Product> {
//     const response = await axios.get(`${API_BASE_URL}/products/${id}`);
//     return response.data;
//   },
//   
//   async getProductsByCategory(category: string): Promise<Product[]> {
//     const response = await axios.get(`${API_BASE_URL}/products?category=${category}`);
//     return response.data;
//   },
//   
//   async searchProducts(query: string): Promise<Product[]> {
//     const response = await axios.get(`${API_BASE_URL}/products/search?q=${query}`);
//     return response.data;
//   },
// };

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter((p) => p.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
};

export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find((p) => p.id === id);
};
