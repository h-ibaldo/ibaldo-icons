import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchExpandCProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchExpandC: ForwardRefExoticComponent<SearchExpandCProps & RefAttributes<Svg>>;

export default SearchExpandC;
export { SearchExpandC };
