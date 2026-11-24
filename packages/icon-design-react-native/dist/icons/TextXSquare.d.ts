import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextXSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextXSquare: ForwardRefExoticComponent<TextXSquareProps & RefAttributes<Svg>>;

export default TextXSquare;
export { TextXSquare };
