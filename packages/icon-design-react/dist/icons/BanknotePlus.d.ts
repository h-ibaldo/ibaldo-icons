import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknotePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknotePlus: ForwardRefExoticComponent<BanknotePlusProps & RefAttributes<SVGSVGElement>>;

export default BanknotePlus;
export { BanknotePlus };
