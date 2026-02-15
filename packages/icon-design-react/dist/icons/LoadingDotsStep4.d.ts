import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingDotsStep4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingDotsStep4: ForwardRefExoticComponent<LoadingDotsStep4Props & RefAttributes<SVGSVGElement>>;

export default LoadingDotsStep4;
export { LoadingDotsStep4 };
