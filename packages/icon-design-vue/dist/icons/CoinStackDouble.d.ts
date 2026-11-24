import type { DefineComponent } from 'vue';

export interface CoinStackDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CoinStackDouble: DefineComponent<CoinStackDoubleProps>;

export default CoinStackDouble;
export { CoinStackDouble };
