import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchB: ForwardRefExoticComponent<SearchBProps & RefAttributes<SVGSVGElement>>;

export default SearchB;
export { SearchB };
