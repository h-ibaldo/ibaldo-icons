import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackOverlap: ForwardRefExoticComponent<SquareStackOverlapProps & RefAttributes<SVGSVGElement>>;

export default SquareStackOverlap;
export { SquareStackOverlap };
