import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressSpinnerLoadingCircleLineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressSpinnerLoadingCircleLine: ForwardRefExoticComponent<ProgressSpinnerLoadingCircleLineProps & RefAttributes<SVGSVGElement>>;

export default ProgressSpinnerLoadingCircleLine;
export { ProgressSpinnerLoadingCircleLine };
