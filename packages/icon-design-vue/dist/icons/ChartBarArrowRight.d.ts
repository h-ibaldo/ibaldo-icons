import type { DefineComponent } from 'vue';

export interface ChartBarArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarArrowRight: DefineComponent<ChartBarArrowRightProps>;

export default ChartBarArrowRight;
export { ChartBarArrowRight };
