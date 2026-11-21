import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CoinStackDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CoinStackDouble: ForwardRefExoticComponent<CoinStackDoubleProps & RefAttributes<SVGSVGElement>>;

export default CoinStackDouble;
export { CoinStackDouble };
