import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextHSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextHSquare: ForwardRefExoticComponent<TextHSquareProps & RefAttributes<Svg>>;

export default TextHSquare;
export { TextHSquare };
