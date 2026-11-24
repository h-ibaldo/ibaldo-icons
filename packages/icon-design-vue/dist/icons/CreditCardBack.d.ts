import type { DefineComponent } from 'vue';

export interface CreditCardBackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardBack: DefineComponent<CreditCardBackProps>;

export default CreditCardBack;
export { CreditCardBack };
