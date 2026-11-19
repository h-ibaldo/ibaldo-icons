import type { DefineComponent } from 'vue';

export interface ChartBarSquareThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareThin: DefineComponent<ChartBarSquareThinProps>;

export default ChartBarSquareThin;
export { ChartBarSquareThin };
