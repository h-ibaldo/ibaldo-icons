import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchMinus: ForwardRefExoticComponent<SearchMinusProps & RefAttributes<SVGSVGElement>>;

export default SearchMinus;
export { SearchMinus };
