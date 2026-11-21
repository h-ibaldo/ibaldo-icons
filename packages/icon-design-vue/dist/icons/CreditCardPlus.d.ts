import type { DefineComponent } from 'vue';

export interface CreditCardPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardPlus: DefineComponent<CreditCardPlusProps>;

export default CreditCardPlus;
export { CreditCardPlus };
