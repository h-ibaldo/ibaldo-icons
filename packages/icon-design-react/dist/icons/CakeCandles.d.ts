import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CakeCandlesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CakeCandles: ForwardRefExoticComponent<CakeCandlesProps & RefAttributes<SVGSVGElement>>;

export default CakeCandles;
export { CakeCandles };
