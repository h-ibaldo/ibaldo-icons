import type { DefineComponent } from 'vue';

export interface CartPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartPlus: DefineComponent<CartPlusProps>;

export default CartPlus;
export { CartPlus };
