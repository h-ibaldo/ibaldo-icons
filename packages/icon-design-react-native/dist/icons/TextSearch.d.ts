import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextSearch: ForwardRefExoticComponent<TextSearchProps & RefAttributes<Svg>>;

export default TextSearch;
export { TextSearch };
