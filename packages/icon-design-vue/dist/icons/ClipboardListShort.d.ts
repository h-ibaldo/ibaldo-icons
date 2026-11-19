import type { DefineComponent } from 'vue';

export interface ClipboardListShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardListShort: DefineComponent<ClipboardListShortProps>;

export default ClipboardListShort;
export { ClipboardListShort };
