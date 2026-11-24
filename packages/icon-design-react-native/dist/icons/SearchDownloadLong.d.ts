import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchDownloadLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchDownloadLong: ForwardRefExoticComponent<SearchDownloadLongProps & RefAttributes<Svg>>;

export default SearchDownloadLong;
export { SearchDownloadLong };
