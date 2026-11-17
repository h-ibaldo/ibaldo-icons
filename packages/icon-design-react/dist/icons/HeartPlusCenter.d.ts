import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartPlusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartPlusCenter: ForwardRefExoticComponent<HeartPlusCenterProps & RefAttributes<SVGSVGElement>>;

export default HeartPlusCenter;
export { HeartPlusCenter };
