import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ObserverEyeView2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ObserverEyeView2: ForwardRefExoticComponent<ObserverEyeView2Props & RefAttributes<SVGSVGElement>>;

export default ObserverEyeView2;
export { ObserverEyeView2 };
