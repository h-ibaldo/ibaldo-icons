import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextCursorNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextCursorNarrow: ForwardRefExoticComponent<TextCursorNarrowProps & RefAttributes<Svg>>;

export default TextCursorNarrow;
export { TextCursorNarrow };
