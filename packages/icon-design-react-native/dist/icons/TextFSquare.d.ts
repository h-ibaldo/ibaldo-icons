import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextFSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextFSquare: ForwardRefExoticComponent<TextFSquareProps & RefAttributes<Svg>>;

export default TextFSquare;
export { TextFSquare };
