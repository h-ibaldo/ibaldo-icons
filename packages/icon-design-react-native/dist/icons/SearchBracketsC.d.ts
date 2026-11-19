import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SearchBracketsCProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SearchBracketsC: ForwardRefExoticComponent<SearchBracketsCProps & RefAttributes<Svg>>;

export default SearchBracketsC;
export { SearchBracketsC };
