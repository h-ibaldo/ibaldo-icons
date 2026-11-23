import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarSettingsHeaderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSettingsHeader: ForwardRefExoticComponent<CalendarSettingsHeaderProps & RefAttributes<SVGSVGElement>>;

export default CalendarSettingsHeader;
export { CalendarSettingsHeader };
