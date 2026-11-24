import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchBracketsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchBrackets: ForwardRefExoticComponent<SearchBracketsProps & RefAttributes<Svg>>;

export default SearchBrackets;
export { SearchBrackets };
