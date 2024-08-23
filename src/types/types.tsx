export type TCardIncrement = {
    id: string;
    values: number;
};

type SortType = "low-to-high" | "high-to-low" | null;

export type ProductsState = {
    [x: string]: any;
    products: TProductProps[];
    searchQuery: string;
    value: number;
    card: number;
    selectedProduct: TProductProps | null;
    cardProduct: TProductProps[];
    cardIncrement: TCardIncrement[];
    singleProduct?: TProductProps;
    minPrice: number;
    maxPrice: typeof Infinity;
    sort?: SortType;
};

export interface CartItem extends ProductsState {
    quantity: number;
}

export interface TProductProps {
    quantity: number;
    avaiableQuantity: number;
    _id: string;
    image: string;
    title: string;
    description: string;
    brand: string;
    price: number;
    category: string;
    stock: number;
    rating: number;
    update?: string;
};

export interface AddToCartPayload {
    product: TProductProps;
    quantity: number;
}

export interface TCartItem extends TProductProps {
    quantity: number;
}

export interface TCard {
    items: TCartItem[];
}
export interface TFormInput {
    image: string;
    title: string;
    description: string;
    brand: string;
    price: number;
    category: string;
    stock: number;
    rating: number;
};


 






