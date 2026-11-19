import type { DefineComponent } from 'vue';

export interface ClockPaperclipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockPaperclip: DefineComponent<ClockPaperclipProps>;

export default ClockPaperclip;
export { ClockPaperclip };
