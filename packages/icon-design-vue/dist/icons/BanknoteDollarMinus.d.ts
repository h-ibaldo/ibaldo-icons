import type { DefineComponent } from 'vue';

export interface BanknoteDollarMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarMinus: DefineComponent<BanknoteDollarMinusProps>;

export default BanknoteDollarMinus;
export { BanknoteDollarMinus };
