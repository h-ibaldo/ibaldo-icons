import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SkipForwardDoubleThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SkipForwardDoubleThick: ForwardRefExoticComponent<SkipForwardDoubleThickProps & RefAttributes<Svg>>;

export default SkipForwardDoubleThick;
export { SkipForwardDoubleThick };
