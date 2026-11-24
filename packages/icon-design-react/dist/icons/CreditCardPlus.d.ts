import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardPlus: ForwardRefExoticComponent<CreditCardPlusProps & RefAttributes<SVGSVGElement>>;

export default CreditCardPlus;
export { CreditCardPlus };
