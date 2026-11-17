import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipBackSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipBackSquare: ForwardRefExoticComponent<SkipBackSquareProps & RefAttributes<SVGSVGElement>>;

export default SkipBackSquare;
export { SkipBackSquare };
