import type { DefineComponent } from 'vue';

export interface ClipboardListCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardListCheck: DefineComponent<ClipboardListCheckProps>;

export default ClipboardListCheck;
export { ClipboardListCheck };
