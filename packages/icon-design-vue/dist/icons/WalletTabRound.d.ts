import type { DefineComponent } from 'vue';

export interface WalletTabRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WalletTabRound: DefineComponent<WalletTabRoundProps>;

export default WalletTabRound;
export { WalletTabRound };
