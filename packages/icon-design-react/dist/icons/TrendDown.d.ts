import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrendDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrendDown: ForwardRefExoticComponent<TrendDownProps & RefAttributes<SVGSVGElement>>;

export default TrendDown;
export { TrendDown };
