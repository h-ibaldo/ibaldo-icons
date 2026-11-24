import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PiggyBankCrackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PiggyBankCrack: ForwardRefExoticComponent<PiggyBankCrackProps & RefAttributes<SVGSVGElement>>;

export default PiggyBankCrack;
export { PiggyBankCrack };
