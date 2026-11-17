import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchExpandBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchExpandB: ForwardRefExoticComponent<SearchExpandBProps & RefAttributes<SVGSVGElement>>;

export default SearchExpandB;
export { SearchExpandB };
