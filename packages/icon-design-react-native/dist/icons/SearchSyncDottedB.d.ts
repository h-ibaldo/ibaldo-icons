import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchSyncDottedBProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchSyncDottedB: ForwardRefExoticComponent<SearchSyncDottedBProps & RefAttributes<Svg>>;

export default SearchSyncDottedB;
export { SearchSyncDottedB };
