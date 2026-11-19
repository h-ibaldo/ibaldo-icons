import type { DefineComponent } from 'vue';

export interface WindowChartArrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChartArrow: DefineComponent<WindowChartArrowProps>;

export default WindowChartArrow;
export { WindowChartArrow };
