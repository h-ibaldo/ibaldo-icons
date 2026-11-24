import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CoinStackSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CoinStackSearch: ForwardRefExoticComponent<CoinStackSearchProps & RefAttributes<SVGSVGElement>>;

export default CoinStackSearch;
export { CoinStackSearch };
