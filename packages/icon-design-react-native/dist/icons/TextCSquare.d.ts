import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextCSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextCSquare: ForwardRefExoticComponent<TextCSquareProps & RefAttributes<Svg>>;

export default TextCSquare;
export { TextCSquare };
