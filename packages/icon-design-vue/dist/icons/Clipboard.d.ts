import type { DefineComponent } from 'vue';

export interface ClipboardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Clipboard: DefineComponent<ClipboardProps>;

export default Clipboard;
export { Clipboard };
