import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchCheckBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchCheckB: ForwardRefExoticComponent<SearchCheckBProps & RefAttributes<SVGSVGElement>>;

export default SearchCheckB;
export { SearchCheckB };
