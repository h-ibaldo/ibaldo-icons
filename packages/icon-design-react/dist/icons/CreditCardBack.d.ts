import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardBackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardBack: ForwardRefExoticComponent<CreditCardBackProps & RefAttributes<SVGSVGElement>>;

export default CreditCardBack;
export { CreditCardBack };
