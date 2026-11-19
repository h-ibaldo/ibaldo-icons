import type { DefineComponent } from 'vue';

export interface BasketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Basket: DefineComponent<BasketProps>;

export default Basket;
export { Basket };
