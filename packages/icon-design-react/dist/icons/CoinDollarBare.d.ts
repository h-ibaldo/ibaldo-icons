import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CoinDollarBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CoinDollarBare: ForwardRefExoticComponent<CoinDollarBareProps & RefAttributes<SVGSVGElement>>;

export default CoinDollarBare;
export { CoinDollarBare };
