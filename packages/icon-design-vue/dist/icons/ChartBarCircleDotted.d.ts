import type { DefineComponent } from 'vue';

export interface ChartBarCircleDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleDotted: DefineComponent<ChartBarCircleDottedProps>;

export default ChartBarCircleDotted;
export { ChartBarCircleDotted };
