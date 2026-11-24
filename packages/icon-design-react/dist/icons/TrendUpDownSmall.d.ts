import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrendUpDownSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrendUpDownSmall: ForwardRefExoticComponent<TrendUpDownSmallProps & RefAttributes<SVGSVGElement>>;

export default TrendUpDownSmall;
export { TrendUpDownSmall };
