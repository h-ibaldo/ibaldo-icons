import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchExpandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchExpand: ForwardRefExoticComponent<SearchExpandProps & RefAttributes<SVGSVGElement>>;

export default SearchExpand;
export { SearchExpand };
