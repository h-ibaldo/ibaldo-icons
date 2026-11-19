import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text2DSquareSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text2DSquareSmall: ForwardRefExoticComponent<Text2DSquareSmallProps & RefAttributes<Svg>>;

export default Text2DSquareSmall;
export { Text2DSquareSmall };
