import type { DefineComponent } from 'vue';

export interface CreditCardChipDetailedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardChipDetailed: DefineComponent<CreditCardChipDetailedProps>;

export default CreditCardChipDetailed;
export { CreditCardChipDetailed };
