import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchC: ForwardRefExoticComponent<SearchCProps & RefAttributes<SVGSVGElement>>;

export default SearchC;
export { SearchC };
