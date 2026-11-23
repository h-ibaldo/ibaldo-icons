import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextItalicXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextItalicX: ForwardRefExoticComponent<TextItalicXProps & RefAttributes<Svg>>;

export default TextItalicX;
export { TextItalicX };
