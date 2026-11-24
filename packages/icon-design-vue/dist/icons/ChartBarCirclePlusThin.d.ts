import type { DefineComponent } from 'vue';

export interface ChartBarCirclePlusThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarCirclePlusThin: DefineComponent<ChartBarCirclePlusThinProps>;

export default ChartBarCirclePlusThin;
export { ChartBarCirclePlusThin };
