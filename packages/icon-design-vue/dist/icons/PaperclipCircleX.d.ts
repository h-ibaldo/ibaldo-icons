import type { DefineComponent } from 'vue';

export interface PaperclipCircleXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleX: DefineComponent<PaperclipCircleXProps>;

export default PaperclipCircleX;
export { PaperclipCircleX };
