import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesShort: ForwardRefExoticComponent<FilterLinesShortProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesShort;
export { FilterLinesShort };
