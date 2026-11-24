import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDollarArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDollarArrowLeft: ForwardRefExoticComponent<BanknoteDollarArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDollarArrowLeft;
export { BanknoteDollarArrowLeft };
