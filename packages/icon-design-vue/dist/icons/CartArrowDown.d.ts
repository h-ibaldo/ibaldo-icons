import type { DefineComponent } from 'vue';

export interface CartArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartArrowDown: DefineComponent<CartArrowDownProps>;

export default CartArrowDown;
export { CartArrowDown };
