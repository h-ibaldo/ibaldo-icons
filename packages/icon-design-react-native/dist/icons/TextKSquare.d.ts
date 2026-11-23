import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextKSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextKSquare: ForwardRefExoticComponent<TextKSquareProps & RefAttributes<Svg>>;

export default TextKSquare;
export { TextKSquare };
