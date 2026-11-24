import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextPSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextPSquare: ForwardRefExoticComponent<TextPSquareProps & RefAttributes<Svg>>;

export default TextPSquare;
export { TextPSquare };
