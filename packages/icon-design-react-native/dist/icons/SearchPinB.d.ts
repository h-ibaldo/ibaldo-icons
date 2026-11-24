import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchPinBProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchPinB: ForwardRefExoticComponent<SearchPinBProps & RefAttributes<Svg>>;

export default SearchPinB;
export { SearchPinB };
