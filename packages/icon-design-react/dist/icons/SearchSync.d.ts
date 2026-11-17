import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchSync: ForwardRefExoticComponent<SearchSyncProps & RefAttributes<SVGSVGElement>>;

export default SearchSync;
export { SearchSync };
