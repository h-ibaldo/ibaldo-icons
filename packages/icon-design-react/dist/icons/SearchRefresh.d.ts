import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchRefresh: ForwardRefExoticComponent<SearchRefreshProps & RefAttributes<SVGSVGElement>>;

export default SearchRefresh;
export { SearchRefresh };
