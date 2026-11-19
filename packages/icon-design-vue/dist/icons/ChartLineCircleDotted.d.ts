import type { DefineComponent } from 'vue';

export interface ChartLineCircleDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineCircleDotted: DefineComponent<ChartLineCircleDottedProps>;

export default ChartLineCircleDotted;
export { ChartLineCircleDotted };
