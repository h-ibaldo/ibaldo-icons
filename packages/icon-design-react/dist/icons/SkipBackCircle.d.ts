import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipBackCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipBackCircle: ForwardRefExoticComponent<SkipBackCircleProps & RefAttributes<SVGSVGElement>>;

export default SkipBackCircle;
export { SkipBackCircle };
