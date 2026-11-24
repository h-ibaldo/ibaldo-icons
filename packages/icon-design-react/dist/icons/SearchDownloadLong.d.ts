import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchDownloadLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchDownloadLong: ForwardRefExoticComponent<SearchDownloadLongProps & RefAttributes<SVGSVGElement>>;

export default SearchDownloadLong;
export { SearchDownloadLong };
