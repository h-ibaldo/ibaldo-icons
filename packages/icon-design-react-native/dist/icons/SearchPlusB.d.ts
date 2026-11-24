import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchPlusBProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchPlusB: ForwardRefExoticComponent<SearchPlusBProps & RefAttributes<Svg>>;

export default SearchPlusB;
export { SearchPlusB };
