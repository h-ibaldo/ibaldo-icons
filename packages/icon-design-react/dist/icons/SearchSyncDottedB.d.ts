import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchSyncDottedBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchSyncDottedB: ForwardRefExoticComponent<SearchSyncDottedBProps & RefAttributes<SVGSVGElement>>;

export default SearchSyncDottedB;
export { SearchSyncDottedB };
