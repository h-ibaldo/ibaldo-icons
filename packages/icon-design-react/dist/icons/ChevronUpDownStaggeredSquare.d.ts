import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpDownStaggeredSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpDownStaggeredSquare: ForwardRefExoticComponent<ChevronUpDownStaggeredSquareProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpDownStaggeredSquare;
export { ChevronUpDownStaggeredSquare };
