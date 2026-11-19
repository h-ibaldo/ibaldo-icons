import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchMinusBProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchMinusB: ForwardRefExoticComponent<SearchMinusBProps & RefAttributes<Svg>>;

export default SearchMinusB;
export { SearchMinusB };
