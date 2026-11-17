import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchDotsCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchDotsC: ForwardRefExoticComponent<SearchDotsCProps & RefAttributes<SVGSVGElement>>;

export default SearchDotsC;
export { SearchDotsC };
