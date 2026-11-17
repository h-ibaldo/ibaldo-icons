import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartStripedAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartStripedAngular: ForwardRefExoticComponent<HeartStripedAngularProps & RefAttributes<SVGSVGElement>>;

export default HeartStripedAngular;
export { HeartStripedAngular };
