
// This file will be used to connect to the PHP backend API
// For now, we're using mock data, but this will be replaced with actual API calls

import { Product } from "@/data/products";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Base URL for API endpoints - replace with your actual API endpoint
const API_BASE_URL = '/api';

export async function fetchAllProducts(): Promise<ApiResponse<Product[]>> {
  try {
    // In production, this would be:
    // const response = await fetch(`${API_BASE_URL}/products.php`);
    // const data = await response.json();
    // return data;
    
    // For now, we'll simulate with local data
    const { products } = await import("@/data/products");
    return {
      success: true,
      data: products
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      success: false,
      error: "Failed to fetch products"
    };
  }
}

export async function fetchProductById(id: number): Promise<ApiResponse<Product>> {
  try {
    // In production, this would be:
    // const response = await fetch(`${API_BASE_URL}/product.php?id=${id}`);
    // const data = await response.json();
    // return data;
    
    // For now, we'll simulate with local data
    const { products } = await import("@/data/products");
    const product = products.find(p => p.id === id);
    
    if (product) {
      return {
        success: true,
        data: product
      };
    } else {
      return {
        success: false,
        error: "Product not found"
      };
    }
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return {
      success: false,
      error: "Failed to fetch product details"
    };
  }
}
