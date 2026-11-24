import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartCheckAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartCheckAngular: ForwardRefExoticComponent<HeartCheckAngularProps & RefAttributes<SVGSVGElement>>;

export default HeartCheckAngular;
export { HeartCheckAngular };
