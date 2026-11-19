import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchMinus: ForwardRefExoticComponent<SearchMinusProps & RefAttributes<Svg>>;

export default SearchMinus;
export { SearchMinus };
