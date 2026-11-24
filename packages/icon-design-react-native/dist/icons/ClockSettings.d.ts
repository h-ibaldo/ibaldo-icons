import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSettings: ForwardRefExoticComponent<ClockSettingsProps & RefAttributes<Svg>>;

export default ClockSettings;
export { ClockSettings };
