import type { DefineComponent } from 'vue';

export interface WindowLetterEProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLetterE: DefineComponent<WindowLetterEProps>;

export default WindowLetterE;
export { WindowLetterE };
