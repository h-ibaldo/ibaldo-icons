import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressDotsCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressDotsCenter: ForwardRefExoticComponent<ProgressDotsCenterProps & RefAttributes<Svg>>;

export default ProgressDotsCenter;
export { ProgressDotsCenter };
