import type { DefineComponent } from 'vue';

export interface PaperclipCircleShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleShort: DefineComponent<PaperclipCircleShortProps>;

export default PaperclipCircleShort;
export { PaperclipCircleShort };
