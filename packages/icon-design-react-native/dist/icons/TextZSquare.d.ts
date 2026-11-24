import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextZSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextZSquare: ForwardRefExoticComponent<TextZSquareProps & RefAttributes<Svg>>;

export default TextZSquare;
export { TextZSquare };
