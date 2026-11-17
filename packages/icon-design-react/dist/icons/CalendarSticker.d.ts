import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalendarStickerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CalendarSticker: ForwardRefExoticComponent<CalendarStickerProps & RefAttributes<SVGSVGElement>>;

export default CalendarSticker;
export { CalendarSticker };
