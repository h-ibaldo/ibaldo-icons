import type { DefineComponent } from 'vue';

export interface WindowChartZigzagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChartZigzag: DefineComponent<WindowChartZigzagProps>;

export default WindowChartZigzag;
export { WindowChartZigzag };
