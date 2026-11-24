import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextMSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextMSquare: ForwardRefExoticComponent<TextMSquareProps & RefAttributes<Svg>>;

export default TextMSquare;
export { TextMSquare };
