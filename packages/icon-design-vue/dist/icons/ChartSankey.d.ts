import type { DefineComponent } from 'vue';

export interface ChartSankeyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartSankey: DefineComponent<ChartSankeyProps>;

export default ChartSankey;
export { ChartSankey };
