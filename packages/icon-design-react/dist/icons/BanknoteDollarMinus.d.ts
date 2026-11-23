import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollarMinus: ForwardRefExoticComponent<BanknoteDollarMinusProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollarMinus;
export { BanknoteDollarMinus };
