import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchSyncBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchSyncB: ForwardRefExoticComponent<SearchSyncBProps & RefAttributes<SVGSVGElement>>;

export default SearchSyncB;
export { SearchSyncB };
