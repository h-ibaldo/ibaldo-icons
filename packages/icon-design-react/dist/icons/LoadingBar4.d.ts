import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar4: ForwardRefExoticComponent<LoadingBar4Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar4;
export { LoadingBar4 };
