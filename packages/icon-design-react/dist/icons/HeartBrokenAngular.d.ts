import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartBrokenAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartBrokenAngular: ForwardRefExoticComponent<HeartBrokenAngularProps & RefAttributes<SVGSVGElement>>;

export default HeartBrokenAngular;
export { HeartBrokenAngular };
