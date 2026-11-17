import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartPositiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartPositive: ForwardRefExoticComponent<HeartPositiveProps & RefAttributes<SVGSVGElement>>;

export default HeartPositive;
export { HeartPositive };
