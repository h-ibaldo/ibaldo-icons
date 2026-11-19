import type { DefineComponent } from 'vue';

export interface WindowLetterWProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLetterW: DefineComponent<WindowLetterWProps>;

export default WindowLetterW;
export { WindowLetterW };
