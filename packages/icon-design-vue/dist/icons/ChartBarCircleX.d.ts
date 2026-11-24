import type { DefineComponent } from 'vue';

export interface ChartBarCircleXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleX: DefineComponent<ChartBarCircleXProps>;

export default ChartBarCircleX;
export { ChartBarCircleX };
