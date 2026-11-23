import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CoinDollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CoinDollar: ForwardRefExoticComponent<CoinDollarProps & RefAttributes<SVGSVGElement>>;

export default CoinDollar;
export { CoinDollar };
