import type { DefineComponent } from 'vue';

export interface ClipboardPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardPlus: DefineComponent<ClipboardPlusProps>;

export default ClipboardPlus;
export { ClipboardPlus };
