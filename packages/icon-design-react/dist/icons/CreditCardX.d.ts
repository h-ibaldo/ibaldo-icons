import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardX: ForwardRefExoticComponent<CreditCardXProps & RefAttributes<SVGSVGElement>>;

export default CreditCardX;
export { CreditCardX };
