import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchXCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchXC: ForwardRefExoticComponent<SearchXCProps & RefAttributes<SVGSVGElement>>;

export default SearchXC;
export { SearchXC };
