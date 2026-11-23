import type { DefineComponent } from 'vue';

export interface BanknoteDollarXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteDollarX: DefineComponent<BanknoteDollarXProps>;

export default BanknoteDollarX;
export { BanknoteDollarX };
