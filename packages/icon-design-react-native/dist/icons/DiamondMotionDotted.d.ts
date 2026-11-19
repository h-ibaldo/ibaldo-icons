import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiamondMotionDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiamondMotionDotted: ForwardRefExoticComponent<DiamondMotionDottedProps & RefAttributes<Svg>>;

export default DiamondMotionDotted;
export { DiamondMotionDotted };
