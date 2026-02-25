import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar42: ForwardRefExoticComponent<LoadingBar42Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar42;
export { LoadingBar42 };
