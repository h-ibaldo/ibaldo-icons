import type { DefineComponent } from 'vue';

export interface BasketGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BasketGrid: DefineComponent<BasketGridProps>;

export default BasketGrid;
export { BasketGrid };
