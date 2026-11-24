import type { DefineComponent } from 'vue';

export interface CoinDollarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CoinDollar: DefineComponent<CoinDollarProps>;

export default CoinDollar;
export { CoinDollar };
