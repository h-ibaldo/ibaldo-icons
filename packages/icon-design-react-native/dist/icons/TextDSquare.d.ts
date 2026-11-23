import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextDSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextDSquare: ForwardRefExoticComponent<TextDSquareProps & RefAttributes<Svg>>;

export default TextDSquare;
export { TextDSquare };
