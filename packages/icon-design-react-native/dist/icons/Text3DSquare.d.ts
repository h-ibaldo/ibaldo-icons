import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text3DSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text3DSquare: ForwardRefExoticComponent<Text3DSquareProps & RefAttributes<Svg>>;

export default Text3DSquare;
export { Text3DSquare };
