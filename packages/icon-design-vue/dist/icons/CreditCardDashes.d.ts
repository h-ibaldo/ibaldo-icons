import type { DefineComponent } from 'vue';

export interface CreditCardDashesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardDashes: DefineComponent<CreditCardDashesProps>;

export default CreditCardDashes;
export { CreditCardDashes };
