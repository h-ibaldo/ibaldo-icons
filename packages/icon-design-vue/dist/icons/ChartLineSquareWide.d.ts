import type { DefineComponent } from 'vue';

export interface ChartLineSquareWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareWide: DefineComponent<ChartLineSquareWideProps>;

export default ChartLineSquareWide;
export { ChartLineSquareWide };
