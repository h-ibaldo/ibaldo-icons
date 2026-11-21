import type { DefineComponent } from 'vue';

export interface CartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Cart: DefineComponent<CartProps>;

export default Cart;
export { Cart };
