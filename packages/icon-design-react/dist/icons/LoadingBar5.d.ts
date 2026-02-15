import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingBar5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingBar5: ForwardRefExoticComponent<LoadingBar5Props & RefAttributes<SVGSVGElement>>;

export default LoadingBar5;
export { LoadingBar5 };
