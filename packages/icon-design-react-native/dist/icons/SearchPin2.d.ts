import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchPin2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchPin2: ForwardRefExoticComponent<SearchPin2Props & RefAttributes<Svg>>;

export default SearchPin2;
export { SearchPin2 };
