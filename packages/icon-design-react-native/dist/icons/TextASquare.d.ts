import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextASquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextASquare: ForwardRefExoticComponent<TextASquareProps & RefAttributes<Svg>>;

export default TextASquare;
export { TextASquare };
