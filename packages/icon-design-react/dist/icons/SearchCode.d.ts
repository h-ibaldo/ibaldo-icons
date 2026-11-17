import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchCode: ForwardRefExoticComponent<SearchCodeProps & RefAttributes<SVGSVGElement>>;

export default SearchCode;
export { SearchCode };
