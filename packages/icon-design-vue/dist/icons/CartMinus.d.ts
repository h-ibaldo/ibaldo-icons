import type { DefineComponent } from 'vue';

export interface CartMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartMinus: DefineComponent<CartMinusProps>;

export default CartMinus;
export { CartMinus };
