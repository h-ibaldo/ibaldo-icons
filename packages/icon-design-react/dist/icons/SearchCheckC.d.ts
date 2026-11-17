import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchCheckCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchCheckC: ForwardRefExoticComponent<SearchCheckCProps & RefAttributes<SVGSVGElement>>;

export default SearchCheckC;
export { SearchCheckC };
