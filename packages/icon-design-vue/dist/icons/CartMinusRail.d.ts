import type { DefineComponent } from 'vue';

export interface CartMinusRailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CartMinusRail: DefineComponent<CartMinusRailProps>;

export default CartMinusRail;
export { CartMinusRail };
