import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchPlusBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchPlusB: ForwardRefExoticComponent<SearchPlusBProps & RefAttributes<SVGSVGElement>>;

export default SearchPlusB;
export { SearchPlusB };
