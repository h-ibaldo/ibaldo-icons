import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextUSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextUSquare: ForwardRefExoticComponent<TextUSquareProps & RefAttributes<Svg>>;

export default TextUSquare;
export { TextUSquare };
