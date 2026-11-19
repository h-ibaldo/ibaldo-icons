import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAdSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAdSquare: ForwardRefExoticComponent<TextAdSquareProps & RefAttributes<Svg>>;

export default TextAdSquare;
export { TextAdSquare };
