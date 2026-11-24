import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesCircle: ForwardRefExoticComponent<FilterLinesCircleProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesCircle;
export { FilterLinesCircle };
