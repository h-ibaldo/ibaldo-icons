import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCard: ForwardRefExoticComponent<CreditCardProps & RefAttributes<SVGSVGElement>>;

export default CreditCard;
export { CreditCard };
