import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollarArrowRight: ForwardRefExoticComponent<BanknoteDollarArrowRightProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollarArrowRight;
export { BanknoteDollarArrowRight };
