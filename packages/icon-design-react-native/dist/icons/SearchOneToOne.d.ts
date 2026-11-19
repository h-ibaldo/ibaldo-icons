import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchOneToOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchOneToOne: ForwardRefExoticComponent<SearchOneToOneProps & RefAttributes<Svg>>;

export default SearchOneToOne;
export { SearchOneToOne };
