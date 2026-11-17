import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilterLinesWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilterLinesWide: ForwardRefExoticComponent<FilterLinesWideProps & RefAttributes<SVGSVGElement>>;

export default FilterLinesWide;
export { FilterLinesWide };
