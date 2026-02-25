import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar12: ForwardRefExoticComponent<LoadingBar12Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar12;
export { LoadingBar12 };
