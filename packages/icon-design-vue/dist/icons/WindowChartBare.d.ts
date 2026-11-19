import type { DefineComponent } from 'vue';

export interface WindowChartBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChartBare: DefineComponent<WindowChartBareProps>;

export default WindowChartBare;
export { WindowChartBare };
