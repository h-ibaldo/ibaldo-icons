import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchDownload: ForwardRefExoticComponent<SearchDownloadProps & RefAttributes<Svg>>;

export default SearchDownload;
export { SearchDownload };
