import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextRSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextRSquare: ForwardRefExoticComponent<TextRSquareProps & RefAttributes<Svg>>;

export default TextRSquare;
export { TextRSquare };
