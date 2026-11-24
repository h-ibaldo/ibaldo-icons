import type { DefineComponent } from 'vue';

export interface PiggyBankCoinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PiggyBankCoin: DefineComponent<PiggyBankCoinProps>;

export default PiggyBankCoin;
export { PiggyBankCoin };
