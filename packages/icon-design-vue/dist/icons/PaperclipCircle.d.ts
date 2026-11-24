import type { DefineComponent } from 'vue';

export interface PaperclipCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCircle: DefineComponent<PaperclipCircleProps>;

export default PaperclipCircle;
export { PaperclipCircle };
