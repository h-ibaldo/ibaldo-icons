import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar1: ForwardRefExoticComponent<LoadingBar1Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar1;
export { LoadingBar1 };
