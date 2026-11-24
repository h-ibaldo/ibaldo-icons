import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchX: ForwardRefExoticComponent<SearchXProps & RefAttributes<SVGSVGElement>>;

export default SearchX;
export { SearchX };
