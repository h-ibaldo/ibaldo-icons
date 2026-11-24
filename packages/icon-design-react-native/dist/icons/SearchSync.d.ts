import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchSync: ForwardRefExoticComponent<SearchSyncProps & RefAttributes<Svg>>;

export default SearchSync;
export { SearchSync };
