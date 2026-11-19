import type { DefineComponent } from 'vue';

export interface ChartBarSquarePlusThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquarePlusThin: DefineComponent<ChartBarSquarePlusThinProps>;

export default ChartBarSquarePlusThin;
export { ChartBarSquarePlusThin };
