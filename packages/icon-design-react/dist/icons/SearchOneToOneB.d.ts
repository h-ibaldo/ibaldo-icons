import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchOneToOneBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchOneToOneB: ForwardRefExoticComponent<SearchOneToOneBProps & RefAttributes<SVGSVGElement>>;

export default SearchOneToOneB;
export { SearchOneToOneB };
