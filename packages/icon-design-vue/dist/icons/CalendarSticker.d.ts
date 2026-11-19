import type { DefineComponent } from 'vue';

export interface CalendarStickerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarSticker: DefineComponent<CalendarStickerProps>;

export default CalendarSticker;
export { CalendarSticker };
