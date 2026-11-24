import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipCirclesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipCircles: ForwardRefExoticComponent<SkipCirclesProps & RefAttributes<SVGSVGElement>>;

export default SkipCircles;
export { SkipCircles };
