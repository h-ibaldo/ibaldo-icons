import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchPlus: ForwardRefExoticComponent<SearchPlusProps & RefAttributes<Svg>>;

export default SearchPlus;
export { SearchPlus };
