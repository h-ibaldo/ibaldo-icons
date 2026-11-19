import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChalkboardMathProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChalkboardMath: ForwardRefExoticComponent<ChalkboardMathProps & RefAttributes<Svg>>;

export default ChalkboardMath;
export { ChalkboardMath };
