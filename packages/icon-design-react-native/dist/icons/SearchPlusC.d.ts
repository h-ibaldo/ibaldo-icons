import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchPlusCProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchPlusC: ForwardRefExoticComponent<SearchPlusCProps & RefAttributes<Svg>>;

export default SearchPlusC;
export { SearchPlusC };
