import type { DefineComponent } from 'vue';

export interface CreditCardXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardX: DefineComponent<CreditCardXProps>;

export default CreditCardX;
export { CreditCardX };
