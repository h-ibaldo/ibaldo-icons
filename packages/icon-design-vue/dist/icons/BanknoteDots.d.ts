import type { DefineComponent } from 'vue';

export interface BanknoteDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteDots: DefineComponent<BanknoteDotsProps>;

export default BanknoteDots;
export { BanknoteDots };
