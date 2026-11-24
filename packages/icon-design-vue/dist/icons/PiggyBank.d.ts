import type { DefineComponent } from 'vue';

export interface PiggyBankProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PiggyBank: DefineComponent<PiggyBankProps>;

export default PiggyBank;
export { PiggyBank };
