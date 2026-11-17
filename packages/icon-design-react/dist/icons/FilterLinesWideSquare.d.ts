import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesWideSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesWideSquare: ForwardRefExoticComponent<FilterLinesWideSquareProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesWideSquare;
export { FilterLinesWideSquare };
