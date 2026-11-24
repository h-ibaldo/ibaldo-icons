import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextNSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextNSquare: ForwardRefExoticComponent<TextNSquareProps & RefAttributes<Svg>>;

export default TextNSquare;
export { TextNSquare };
