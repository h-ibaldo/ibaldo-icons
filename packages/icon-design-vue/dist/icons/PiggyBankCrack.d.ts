import type { DefineComponent } from 'vue';

export interface PiggyBankCrackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PiggyBankCrack: DefineComponent<PiggyBankCrackProps>;

export default PiggyBankCrack;
export { PiggyBankCrack };
