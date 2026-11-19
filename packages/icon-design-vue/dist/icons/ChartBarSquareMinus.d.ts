import type { DefineComponent } from 'vue';

export interface ChartBarSquareMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareMinus: DefineComponent<ChartBarSquareMinusProps>;

export default ChartBarSquareMinus;
export { ChartBarSquareMinus };
