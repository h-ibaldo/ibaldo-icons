import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingDotsStep42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingDotsStep42: ForwardRefExoticComponent<LoadingDotsStep42Props & RefAttributes<SVGSVGElement>>;

export default LoadingDotsStep42;
export { LoadingDotsStep42 };
