import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartAngular: ForwardRefExoticComponent<HeartAngularProps & RefAttributes<SVGSVGElement>>;

export default HeartAngular;
export { HeartAngular };
