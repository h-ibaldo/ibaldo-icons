import type { DefineComponent } from 'vue';

export interface CartGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartGrid: DefineComponent<CartGridProps>;

export default CartGrid;
export { CartGrid };
