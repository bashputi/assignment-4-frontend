export type TCardIncrement = {
    id: string;
    values: number;
};

type SortType = "low-to-high" | "high-to-low" | null;

export type ProductsState = {
    [x: string]: unknown;
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
    selectedQuantity: number;
    _id: string;
    image: string;
    title: string;
    description: string;
    brand: string;
    price: number;
    category: string;
    rating: number;
    update?: string;
};

export interface AddToCartPayload {
    product: TProductProps;
    quantity: number;
}

export interface TCartItem extends TProductProps {
    selectedQuantity: number;
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
    quantity: number;
    rating: number;
};


 






