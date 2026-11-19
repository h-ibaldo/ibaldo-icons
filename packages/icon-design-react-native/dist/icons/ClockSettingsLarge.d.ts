import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSettingsLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSettingsLarge: ForwardRefExoticComponent<ClockSettingsLargeProps & RefAttributes<Svg>>;

export default ClockSettingsLarge;
export { ClockSettingsLarge };
