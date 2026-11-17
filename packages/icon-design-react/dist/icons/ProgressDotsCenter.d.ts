import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressDotsCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressDotsCenter: ForwardRefExoticComponent<ProgressDotsCenterProps & RefAttributes<SVGSVGElement>>;

export default ProgressDotsCenter;
export { ProgressDotsCenter };
