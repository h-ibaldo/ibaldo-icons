import type { DefineComponent } from 'vue';

export interface ChartBarHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontal: DefineComponent<ChartBarHorizontalProps>;

export default ChartBarHorizontal;
export { ChartBarHorizontal };
