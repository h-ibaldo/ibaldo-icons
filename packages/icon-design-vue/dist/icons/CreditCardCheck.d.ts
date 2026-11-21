import type { DefineComponent } from 'vue';

export interface CreditCardCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardCheck: DefineComponent<CreditCardCheckProps>;

export default CreditCardCheck;
export { CreditCardCheck };
