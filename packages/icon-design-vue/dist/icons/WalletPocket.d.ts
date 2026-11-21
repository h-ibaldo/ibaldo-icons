import type { DefineComponent } from 'vue';

export interface WalletPocketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WalletPocket: DefineComponent<WalletPocketProps>;

export default WalletPocket;
export { WalletPocket };
