import type { DefineComponent } from 'vue';

export interface CreditCardChipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardChip: DefineComponent<CreditCardChipProps>;

export default CreditCardChip;
export { CreditCardChip };
