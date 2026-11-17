import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchCheck: ForwardRefExoticComponent<SearchCheckProps & RefAttributes<SVGSVGElement>>;

export default SearchCheck;
export { SearchCheck };
