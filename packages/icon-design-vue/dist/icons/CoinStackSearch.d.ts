import type { DefineComponent } from 'vue';

export interface CoinStackSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CoinStackSearch: DefineComponent<CoinStackSearchProps>;

export default CoinStackSearch;
export { CoinStackSearch };
