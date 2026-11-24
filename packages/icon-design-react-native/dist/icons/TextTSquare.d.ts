import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextTSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextTSquare: ForwardRefExoticComponent<TextTSquareProps & RefAttributes<Svg>>;

export default TextTSquare;
export { TextTSquare };
