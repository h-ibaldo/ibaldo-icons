import type { DefineComponent } from 'vue';

export interface BanknoteSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteSearch: DefineComponent<BanknoteSearchProps>;

export default BanknoteSearch;
export { BanknoteSearch };
