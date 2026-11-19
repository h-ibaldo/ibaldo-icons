import type { DefineComponent } from 'vue';

export interface ClipboardListXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardListX: DefineComponent<ClipboardListXProps>;

export default ClipboardListX;
export { ClipboardListX };
