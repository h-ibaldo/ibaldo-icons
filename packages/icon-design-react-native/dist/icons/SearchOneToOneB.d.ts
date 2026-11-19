import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchOneToOneBProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchOneToOneB: ForwardRefExoticComponent<SearchOneToOneBProps & RefAttributes<Svg>>;

export default SearchOneToOneB;
export { SearchOneToOneB };
