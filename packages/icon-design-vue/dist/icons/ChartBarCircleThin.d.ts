import type { DefineComponent } from 'vue';

export interface ChartBarCircleThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleThin: DefineComponent<ChartBarCircleThinProps>;

export default ChartBarCircleThin;
export { ChartBarCircleThin };
