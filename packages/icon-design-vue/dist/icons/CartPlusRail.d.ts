import type { DefineComponent } from 'vue';

export interface CartPlusRailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartPlusRail: DefineComponent<CartPlusRailProps>;

export default CartPlusRail;
export { CartPlusRail };
