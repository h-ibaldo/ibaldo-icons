import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchMinusCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchMinusC: ForwardRefExoticComponent<SearchMinusCProps & RefAttributes<SVGSVGElement>>;

export default SearchMinusC;
export { SearchMinusC };
