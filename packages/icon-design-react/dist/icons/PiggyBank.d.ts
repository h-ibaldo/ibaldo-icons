import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PiggyBankProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PiggyBank: ForwardRefExoticComponent<PiggyBankProps & RefAttributes<SVGSVGElement>>;

export default PiggyBank;
export { PiggyBank };
