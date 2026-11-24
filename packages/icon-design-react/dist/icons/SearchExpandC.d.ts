import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchExpandCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchExpandC: ForwardRefExoticComponent<SearchExpandCProps & RefAttributes<SVGSVGElement>>;

export default SearchExpandC;
export { SearchExpandC };
