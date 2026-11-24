import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchCode: ForwardRefExoticComponent<SearchCodeProps & RefAttributes<Svg>>;

export default SearchCode;
export { SearchCode };
