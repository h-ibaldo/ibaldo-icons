import type { DefineComponent } from 'vue';

export interface ChartBarSquareXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareX: DefineComponent<ChartBarSquareXProps>;

export default ChartBarSquareX;
export { ChartBarSquareX };
