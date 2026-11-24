import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipBackDoubleCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipBackDoubleCircle: ForwardRefExoticComponent<SkipBackDoubleCircleProps & RefAttributes<SVGSVGElement>>;

export default SkipBackDoubleCircle;
export { SkipBackDoubleCircle };
