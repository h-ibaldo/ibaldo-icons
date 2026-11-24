import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollarArrowDown: ForwardRefExoticComponent<BanknoteDollarArrowDownProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollarArrowDown;
export { BanknoteDollarArrowDown };
