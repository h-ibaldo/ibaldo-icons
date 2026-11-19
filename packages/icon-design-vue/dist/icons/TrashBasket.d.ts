import type { DefineComponent } from 'vue';

export interface TrashBasketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashBasket: DefineComponent<TrashBasketProps>;

export default TrashBasket;
export { TrashBasket };
