import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsOutCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsOutCircle: ForwardRefExoticComponent<ArrowsOutCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowsOutCircle;
export { ArrowsOutCircle };
