import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteDots: ForwardRefExoticComponent<BanknoteDotsProps & RefAttributes<SVGSVGElement>>;

export default BanknoteDots;
export { BanknoteDots };
