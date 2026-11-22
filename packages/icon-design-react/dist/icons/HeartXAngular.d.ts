import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartXAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartXAngular: ForwardRefExoticComponent<HeartXAngularProps & RefAttributes<SVGSVGElement>>;

export default HeartXAngular;
export { HeartXAngular };
