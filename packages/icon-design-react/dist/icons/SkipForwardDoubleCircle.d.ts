import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipForwardDoubleCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipForwardDoubleCircle: ForwardRefExoticComponent<SkipForwardDoubleCircleProps & RefAttributes<SVGSVGElement>>;

export default SkipForwardDoubleCircle;
export { SkipForwardDoubleCircle };
