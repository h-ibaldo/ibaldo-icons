import type { DefineComponent } from 'vue';

export interface WalletPocketLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WalletPocketLines: DefineComponent<WalletPocketLinesProps>;

export default WalletPocketLines;
export { WalletPocketLines };
