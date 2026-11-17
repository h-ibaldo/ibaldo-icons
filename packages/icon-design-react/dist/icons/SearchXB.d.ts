import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchXBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchXB: ForwardRefExoticComponent<SearchXBProps & RefAttributes<SVGSVGElement>>;

export default SearchXB;
export { SearchXB };
