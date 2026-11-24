import type { DefineComponent } from 'vue';

export interface BanknoteDollarCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarCheck: DefineComponent<BanknoteDollarCheckProps>;

export default BanknoteDollarCheck;
export { BanknoteDollarCheck };
