import type { DefineComponent } from 'vue';

export interface BanknotePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknotePlus: DefineComponent<BanknotePlusProps>;

export default BanknotePlus;
export { BanknotePlus };
