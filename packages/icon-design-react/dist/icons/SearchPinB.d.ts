import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchPinBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchPinB: ForwardRefExoticComponent<SearchPinBProps & RefAttributes<SVGSVGElement>>;

export default SearchPinB;
export { SearchPinB };
