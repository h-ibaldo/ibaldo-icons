import type { DefineComponent } from 'vue';

export interface ChartBarSquarePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquarePlus: DefineComponent<ChartBarSquarePlusProps>;

export default ChartBarSquarePlus;
export { ChartBarSquarePlus };
