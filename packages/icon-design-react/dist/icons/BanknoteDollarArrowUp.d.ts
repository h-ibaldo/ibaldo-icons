import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollarArrowUp: ForwardRefExoticComponent<BanknoteDollarArrowUpProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollarArrowUp;
export { BanknoteDollarArrowUp };
