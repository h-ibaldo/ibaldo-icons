import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardCheck: ForwardRefExoticComponent<CreditCardCheckProps & RefAttributes<SVGSVGElement>>;

export default CreditCardCheck;
export { CreditCardCheck };
