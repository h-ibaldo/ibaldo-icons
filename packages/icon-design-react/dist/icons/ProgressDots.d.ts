import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressDots: ForwardRefExoticComponent<ProgressDotsProps & RefAttributes<SVGSVGElement>>;

export default ProgressDots;
export { ProgressDots };
