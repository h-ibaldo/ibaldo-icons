import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseSettings: ForwardRefExoticComponent<ArrowClockwiseSettingsProps & RefAttributes<Svg>>;

export default ArrowClockwiseSettings;
export { ArrowClockwiseSettings };
