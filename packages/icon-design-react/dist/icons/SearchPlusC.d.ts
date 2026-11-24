import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchPlusCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchPlusC: ForwardRefExoticComponent<SearchPlusCProps & RefAttributes<SVGSVGElement>>;

export default SearchPlusC;
export { SearchPlusC };
