import type { DefineComponent } from 'vue';

export interface WindowLetterXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLetterX: DefineComponent<WindowLetterXProps>;

export default WindowLetterX;
export { WindowLetterX };
