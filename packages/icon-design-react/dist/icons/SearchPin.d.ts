import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchPinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchPin: ForwardRefExoticComponent<SearchPinProps & RefAttributes<SVGSVGElement>>;

export default SearchPin;
export { SearchPin };
