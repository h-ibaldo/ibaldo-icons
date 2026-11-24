import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchDotsBProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchDotsB: ForwardRefExoticComponent<SearchDotsBProps & RefAttributes<Svg>>;

export default SearchDotsB;
export { SearchDotsB };
