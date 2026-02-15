import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingDotsStep2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingDotsStep2: ForwardRefExoticComponent<LoadingDotsStep2Props & RefAttributes<SVGSVGElement>>;

export default LoadingDotsStep2;
export { LoadingDotsStep2 };
