import type { DefineComponent } from 'vue';

export interface BasketBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BasketBar: DefineComponent<BasketBarProps>;

export default BasketBar;
export { BasketBar };
