import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteMinus: ForwardRefExoticComponent<BanknoteMinusProps & RefAttributes<SVGSVGElement>>;

export default BanknoteMinus;
export { BanknoteMinus };
