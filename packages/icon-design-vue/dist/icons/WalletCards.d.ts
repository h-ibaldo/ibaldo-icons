import type { DefineComponent } from 'vue';

export interface WalletCardsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WalletCards: DefineComponent<WalletCardsProps>;

export default WalletCards;
export { WalletCards };
