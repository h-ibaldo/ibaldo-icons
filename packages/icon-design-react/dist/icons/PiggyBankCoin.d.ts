import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PiggyBankCoinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PiggyBankCoin: ForwardRefExoticComponent<PiggyBankCoinProps & RefAttributes<SVGSVGElement>>;

export default PiggyBankCoin;
export { PiggyBankCoin };
