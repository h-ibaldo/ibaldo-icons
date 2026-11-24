import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchSyncBProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchSyncB: ForwardRefExoticComponent<SearchSyncBProps & RefAttributes<Svg>>;

export default SearchSyncB;
export { SearchSyncB };
