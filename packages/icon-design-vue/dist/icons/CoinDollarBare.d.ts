import type { DefineComponent } from 'vue';

export interface CoinDollarBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CoinDollarBare: DefineComponent<CoinDollarBareProps>;

export default CoinDollarBare;
export { CoinDollarBare };
