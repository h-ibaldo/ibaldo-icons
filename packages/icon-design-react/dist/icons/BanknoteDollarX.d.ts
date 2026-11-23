import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollarX: ForwardRefExoticComponent<BanknoteDollarXProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollarX;
export { BanknoteDollarX };
