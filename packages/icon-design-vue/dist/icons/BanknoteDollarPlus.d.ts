import type { DefineComponent } from 'vue';

export interface BanknoteDollarPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarPlus: DefineComponent<BanknoteDollarPlusProps>;

export default BanknoteDollarPlus;
export { BanknoteDollarPlus };
