import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SearchDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SearchDownload: ForwardRefExoticComponent<SearchDownloadProps & RefAttributes<SVGSVGElement>>;

export default SearchDownload;
export { SearchDownload };
