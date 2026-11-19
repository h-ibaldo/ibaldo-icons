import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchRefresh: ForwardRefExoticComponent<SearchRefreshProps & RefAttributes<Svg>>;

export default SearchRefresh;
export { SearchRefresh };
