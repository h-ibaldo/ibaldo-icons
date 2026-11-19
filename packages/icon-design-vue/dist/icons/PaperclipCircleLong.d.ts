import type { DefineComponent } from 'vue';

export interface PaperclipCircleLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleLong: DefineComponent<PaperclipCircleLongProps>;

export default PaperclipCircleLong;
export { PaperclipCircleLong };
