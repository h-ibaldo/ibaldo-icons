import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseSettingsCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseSettingsCorner: ForwardRefExoticComponent<ArrowClockwiseSettingsCornerProps & RefAttributes<Svg>>;

export default ArrowClockwiseSettingsCorner;
export { ArrowClockwiseSettingsCorner };
