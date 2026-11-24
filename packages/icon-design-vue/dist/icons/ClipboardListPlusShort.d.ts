import type { DefineComponent } from 'vue';

export interface ClipboardListPlusShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardListPlusShort: DefineComponent<ClipboardListPlusShortProps>;

export default ClipboardListPlusShort;
export { ClipboardListPlusShort };
