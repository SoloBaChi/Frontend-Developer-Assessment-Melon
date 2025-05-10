

// types.ts
export interface ProductVariant {
    id: string;
    size: string;
    color: string;
    price: number;
  }
  
  export interface Product {
    id: string;
    name: string;
    variants: ProductVariant[];
  }
  