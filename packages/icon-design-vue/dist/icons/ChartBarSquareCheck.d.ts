import type { DefineComponent } from 'vue';

export interface ChartBarSquareCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareCheck: DefineComponent<ChartBarSquareCheckProps>;

export default ChartBarSquareCheck;
export { ChartBarSquareCheck };
