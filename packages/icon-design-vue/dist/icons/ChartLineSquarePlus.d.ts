import type { DefineComponent } from 'vue';

export interface ChartLineSquarePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineSquarePlus: DefineComponent<ChartLineSquarePlusProps>;

export default ChartLineSquarePlus;
export { ChartLineSquarePlus };
