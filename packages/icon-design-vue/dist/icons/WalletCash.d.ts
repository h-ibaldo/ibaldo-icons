import type { DefineComponent } from 'vue';

export interface WalletCashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WalletCash: DefineComponent<WalletCashProps>;

export default WalletCash;
export { WalletCash };
