import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesSquare: ForwardRefExoticComponent<FilterLinesSquareProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesSquare;
export { FilterLinesSquare };
