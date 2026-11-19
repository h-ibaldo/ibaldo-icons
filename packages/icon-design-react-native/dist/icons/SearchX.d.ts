import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchX: ForwardRefExoticComponent<SearchXProps & RefAttributes<Svg>>;

export default SearchX;
export { SearchX };
