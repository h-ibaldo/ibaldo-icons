import type { DefineComponent } from 'vue';

export interface PaperclipCircleCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCircleCheck: DefineComponent<PaperclipCircleCheckProps>;

export default PaperclipCircleCheck;
export { PaperclipCircleCheck };
