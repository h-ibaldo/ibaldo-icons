import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronRightToBarSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronRightToBarSquare: ForwardRefExoticComponent<ChevronRightToBarSquareProps & RefAttributes<SVGSVGElement>>;

export default ChevronRightToBarSquare;
export { ChevronRightToBarSquare };
