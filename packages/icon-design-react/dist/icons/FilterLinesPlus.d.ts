import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesPlus: ForwardRefExoticComponent<FilterLinesPlusProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesPlus;
export { FilterLinesPlus };
