import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrendUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrendUp: ForwardRefExoticComponent<TrendUpProps & RefAttributes<SVGSVGElement>>;

export default TrendUp;
export { TrendUp };
