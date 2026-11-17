import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartPlusAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartPlusAngular: ForwardRefExoticComponent<HeartPlusAngularProps & RefAttributes<SVGSVGElement>>;

export default HeartPlusAngular;
export { HeartPlusAngular };
