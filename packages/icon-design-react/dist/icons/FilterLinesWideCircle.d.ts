import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesWideCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesWideCircle: ForwardRefExoticComponent<FilterLinesWideCircleProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesWideCircle;
export { FilterLinesWideCircle };
