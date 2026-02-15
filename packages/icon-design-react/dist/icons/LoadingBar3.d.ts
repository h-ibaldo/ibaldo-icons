import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar3: ForwardRefExoticComponent<LoadingBar3Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar3;
export { LoadingBar3 };
