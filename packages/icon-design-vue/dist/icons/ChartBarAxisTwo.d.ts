import type { DefineComponent } from 'vue';

export interface ChartBarAxisTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarAxisTwo: DefineComponent<ChartBarAxisTwoProps>;

export default ChartBarAxisTwo;
export { ChartBarAxisTwo };
