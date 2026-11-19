import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchPinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchPin: ForwardRefExoticComponent<SearchPinProps & RefAttributes<Svg>>;

export default SearchPin;
export { SearchPin };
