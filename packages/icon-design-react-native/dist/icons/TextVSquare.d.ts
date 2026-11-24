import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextVSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextVSquare: ForwardRefExoticComponent<TextVSquareProps & RefAttributes<Svg>>;

export default TextVSquare;
export { TextVSquare };
