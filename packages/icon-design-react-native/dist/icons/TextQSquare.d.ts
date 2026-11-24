import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextQSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextQSquare: ForwardRefExoticComponent<TextQSquareProps & RefAttributes<Svg>>;

export default TextQSquare;
export { TextQSquare };
