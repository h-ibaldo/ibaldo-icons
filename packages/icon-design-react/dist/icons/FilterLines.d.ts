import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLines: ForwardRefExoticComponent<FilterLinesProps & RefAttributes<SVGSVGElement>>;

export default FilterLines;
export { FilterLines };
