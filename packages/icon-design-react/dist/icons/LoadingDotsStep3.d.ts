import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoadingDotsStep3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoadingDotsStep3: ForwardRefExoticComponent<LoadingDotsStep3Props & RefAttributes<SVGSVGElement>>;

export default LoadingDotsStep3;
export { LoadingDotsStep3 };
