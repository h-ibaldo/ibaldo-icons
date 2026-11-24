import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchPlus: ForwardRefExoticComponent<SearchPlusProps & RefAttributes<SVGSVGElement>>;

export default SearchPlus;
export { SearchPlus };
