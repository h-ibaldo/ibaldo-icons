import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextYSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextYSquare: ForwardRefExoticComponent<TextYSquareProps & RefAttributes<Svg>>;

export default TextYSquare;
export { TextYSquare };
