import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextLSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextLSquare: ForwardRefExoticComponent<TextLSquareProps & RefAttributes<Svg>>;

export default TextLSquare;
export { TextLSquare };
