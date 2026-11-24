import type { DefineComponent } from 'vue';

export interface CakeCandlesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CakeCandles: DefineComponent<CakeCandlesProps>;

export default CakeCandles;
export { CakeCandles };
