import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextCursor: ForwardRefExoticComponent<TextCursorProps & RefAttributes<Svg>>;

export default TextCursor;
export { TextCursor };
