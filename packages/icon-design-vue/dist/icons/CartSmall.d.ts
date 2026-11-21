import type { DefineComponent } from 'vue';

export interface CartSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartSmall: DefineComponent<CartSmallProps>;

export default CartSmall;
export { CartSmall };
