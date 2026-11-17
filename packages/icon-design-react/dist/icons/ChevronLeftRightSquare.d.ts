import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronLeftRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronLeftRightSquare: ForwardRefExoticComponent<ChevronLeftRightSquareProps & RefAttributes<SVGSVGElement>>;

export default ChevronLeftRightSquare;
export { ChevronLeftRightSquare };
