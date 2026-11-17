import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchDollarBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchDollarB: ForwardRefExoticComponent<SearchDollarBProps & RefAttributes<SVGSVGElement>>;

export default SearchDollarB;
export { SearchDollarB };
