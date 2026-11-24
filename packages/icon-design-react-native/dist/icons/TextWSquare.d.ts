import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextWSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextWSquare: ForwardRefExoticComponent<TextWSquareProps & RefAttributes<Svg>>;

export default TextWSquare;
export { TextWSquare };
