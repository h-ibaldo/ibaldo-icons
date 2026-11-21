import type { DefineComponent } from 'vue';

export interface BanknoteDollarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteDollar: DefineComponent<BanknoteDollarProps>;

export default BanknoteDollar;
export { BanknoteDollar };
