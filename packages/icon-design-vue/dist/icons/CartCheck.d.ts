import type { DefineComponent } from 'vue';

export interface CartCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartCheck: DefineComponent<CartCheckProps>;

export default CartCheck;
export { CartCheck };
