import type { DefineComponent } from 'vue';

export interface BanknoteTenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteTen: DefineComponent<BanknoteTenProps>;

export default BanknoteTen;
export { BanknoteTen };
