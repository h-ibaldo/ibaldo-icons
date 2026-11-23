import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextISquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextISquare: ForwardRefExoticComponent<TextISquareProps & RefAttributes<Svg>>;

export default TextISquare;
export { TextISquare };
