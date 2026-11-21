import type { DefineComponent } from 'vue';

export interface WalletTabProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WalletTab: DefineComponent<WalletTabProps>;

export default WalletTab;
export { WalletTab };
