import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingDotsStep1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingDotsStep1: ForwardRefExoticComponent<LoadingDotsStep1Props & RefAttributes<SVGSVGElement>>;

export default LoadingDotsStep1;
export { LoadingDotsStep1 };
