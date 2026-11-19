import type { DefineComponent } from 'vue';

export interface ChartBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBar: DefineComponent<ChartBarProps>;

export default ChartBar;
export { ChartBar };
