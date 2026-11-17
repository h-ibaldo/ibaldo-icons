import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronLeftToBarSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronLeftToBarSquare: ForwardRefExoticComponent<ChevronLeftToBarSquareProps & RefAttributes<SVGSVGElement>>;

export default ChevronLeftToBarSquare;
export { ChevronLeftToBarSquare };
