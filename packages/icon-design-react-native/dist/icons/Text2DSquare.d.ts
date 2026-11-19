import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text2DSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text2DSquare: ForwardRefExoticComponent<Text2DSquareProps & RefAttributes<Svg>>;

export default Text2DSquare;
export { Text2DSquare };
