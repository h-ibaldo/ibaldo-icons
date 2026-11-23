import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextGSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextGSquare: ForwardRefExoticComponent<TextGSquareProps & RefAttributes<Svg>>;

export default TextGSquare;
export { TextGSquare };
