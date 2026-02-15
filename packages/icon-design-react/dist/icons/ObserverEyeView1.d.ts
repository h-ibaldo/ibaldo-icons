import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ObserverEyeView1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ObserverEyeView1: ForwardRefExoticComponent<ObserverEyeView1Props & RefAttributes<SVGSVGElement>>;

export default ObserverEyeView1;
export { ObserverEyeView1 };
