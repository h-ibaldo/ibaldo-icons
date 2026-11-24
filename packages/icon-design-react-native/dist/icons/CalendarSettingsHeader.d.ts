import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalendarSettingsHeaderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CalendarSettingsHeader: ForwardRefExoticComponent<CalendarSettingsHeaderProps & RefAttributes<Svg>>;

export default CalendarSettingsHeader;
export { CalendarSettingsHeader };
