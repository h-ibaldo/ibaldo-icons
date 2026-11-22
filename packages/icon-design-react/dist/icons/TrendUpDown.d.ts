import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrendUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrendUpDown: ForwardRefExoticComponent<TrendUpDownProps & RefAttributes<SVGSVGElement>>;

export default TrendUpDown;
export { TrendUpDown };
