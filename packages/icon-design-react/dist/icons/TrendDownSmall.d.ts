import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrendDownSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrendDownSmall: ForwardRefExoticComponent<TrendDownSmallProps & RefAttributes<SVGSVGElement>>;

export default TrendDownSmall;
export { TrendDownSmall };
