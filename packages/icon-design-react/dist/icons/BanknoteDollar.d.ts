import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollar: ForwardRefExoticComponent<BanknoteDollarProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollar;
export { BanknoteDollar };
