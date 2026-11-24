import type { DefineComponent } from 'vue';

export interface CreditCardMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CreditCardMinus: DefineComponent<CreditCardMinusProps>;

export default CreditCardMinus;
export { CreditCardMinus };
