import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text3DSquareSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text3DSquareSmall: ForwardRefExoticComponent<Text3DSquareSmallProps & RefAttributes<Svg>>;

export default Text3DSquareSmall;
export { Text3DSquareSmall };
