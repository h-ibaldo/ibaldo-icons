import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollarPlus: ForwardRefExoticComponent<BanknoteDollarPlusProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollarPlus;
export { BanknoteDollarPlus };
