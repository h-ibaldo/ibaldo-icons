import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardMinus: ForwardRefExoticComponent<CreditCardMinusProps & RefAttributes<SVGSVGElement>>;

export default CreditCardMinus;
export { CreditCardMinus };
