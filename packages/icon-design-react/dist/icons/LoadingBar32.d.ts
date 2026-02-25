import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar32: ForwardRefExoticComponent<LoadingBar32Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar32;
export { LoadingBar32 };
