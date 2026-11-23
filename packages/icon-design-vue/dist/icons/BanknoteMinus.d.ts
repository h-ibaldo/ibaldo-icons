import type { DefineComponent } from 'vue';

export interface BanknoteMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BanknoteMinus: DefineComponent<BanknoteMinusProps>;

export default BanknoteMinus;
export { BanknoteMinus };
