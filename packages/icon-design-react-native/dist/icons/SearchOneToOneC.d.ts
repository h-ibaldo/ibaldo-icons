import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchOneToOneCProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchOneToOneC: ForwardRefExoticComponent<SearchOneToOneCProps & RefAttributes<Svg>>;

export default SearchOneToOneC;
export { SearchOneToOneC };
