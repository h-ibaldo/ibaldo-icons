import type { DefineComponent } from 'vue';

export interface CreditCardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCard: DefineComponent<CreditCardProps>;

export default CreditCard;
export { CreditCard };
