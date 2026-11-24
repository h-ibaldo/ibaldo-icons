import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchOneToOneCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchOneToOneC: ForwardRefExoticComponent<SearchOneToOneCProps & RefAttributes<SVGSVGElement>>;

export default SearchOneToOneC;
export { SearchOneToOneC };
