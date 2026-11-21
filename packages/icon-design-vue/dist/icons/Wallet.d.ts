import type { DefineComponent } from 'vue';

export interface WalletProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Wallet: DefineComponent<WalletProps>;

export default Wallet;
export { Wallet };
