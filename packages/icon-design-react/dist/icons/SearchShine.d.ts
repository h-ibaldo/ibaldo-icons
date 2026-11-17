import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchShine: ForwardRefExoticComponent<SearchShineProps & RefAttributes<SVGSVGElement>>;

export default SearchShine;
export { SearchShine };
