import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesSplit: ForwardRefExoticComponent<FilterLinesSplitProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesSplit;
export { FilterLinesSplit };
