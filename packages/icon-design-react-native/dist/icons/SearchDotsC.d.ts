import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchDotsCProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchDotsC: ForwardRefExoticComponent<SearchDotsCProps & RefAttributes<Svg>>;

export default SearchDotsC;
export { SearchDotsC };
