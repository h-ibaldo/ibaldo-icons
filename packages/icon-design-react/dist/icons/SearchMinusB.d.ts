import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchMinusBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchMinusB: ForwardRefExoticComponent<SearchMinusBProps & RefAttributes<SVGSVGElement>>;

export default SearchMinusB;
export { SearchMinusB };
