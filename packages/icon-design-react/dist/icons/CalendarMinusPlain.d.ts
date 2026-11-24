import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarMinusPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarMinusPlain: ForwardRefExoticComponent<CalendarMinusPlainProps & RefAttributes<SVGSVGElement>>;

export default CalendarMinusPlain;
export { CalendarMinusPlain };
