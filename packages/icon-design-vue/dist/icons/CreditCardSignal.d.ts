import type { DefineComponent } from 'vue';

export interface CreditCardSignalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardSignal: DefineComponent<CreditCardSignalProps>;

export default CreditCardSignal;
export { CreditCardSignal };
