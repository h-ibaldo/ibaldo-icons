import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSettings: ForwardRefExoticComponent<CalendarSettingsProps & RefAttributes<Svg>>;

export default CalendarSettings;
export { CalendarSettings };
