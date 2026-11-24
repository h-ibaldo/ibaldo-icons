import type { DefineComponent } from 'vue';

export interface ClipboardXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardX: DefineComponent<ClipboardXProps>;

export default ClipboardX;
export { ClipboardX };
