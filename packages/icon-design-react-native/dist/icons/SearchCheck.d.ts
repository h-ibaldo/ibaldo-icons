import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchCheck: ForwardRefExoticComponent<SearchCheckProps & RefAttributes<Svg>>;

export default SearchCheck;
export { SearchCheck };
