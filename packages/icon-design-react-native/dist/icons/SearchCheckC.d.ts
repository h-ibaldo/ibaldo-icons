import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchCheckCProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchCheckC: ForwardRefExoticComponent<SearchCheckCProps & RefAttributes<Svg>>;

export default SearchCheckC;
export { SearchCheckC };
