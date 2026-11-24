import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchMinusCProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchMinusC: ForwardRefExoticComponent<SearchMinusCProps & RefAttributes<Svg>>;

export default SearchMinusC;
export { SearchMinusC };
