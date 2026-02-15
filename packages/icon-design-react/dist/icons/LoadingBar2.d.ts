import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar2: ForwardRefExoticComponent<LoadingBar2Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar2;
export { LoadingBar2 };
