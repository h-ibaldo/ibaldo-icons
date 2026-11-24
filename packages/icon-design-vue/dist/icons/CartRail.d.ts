import type { DefineComponent } from 'vue';

export interface CartRailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartRail: DefineComponent<CartRailProps>;

export default CartRail;
export { CartRail };
