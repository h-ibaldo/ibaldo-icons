import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Search: ForwardRefExoticComponent<SearchProps & RefAttributes<SVGSVGElement>>;

export default Search;
export { Search };
