import type { DefineComponent } from 'vue';

export interface ClipboardCheckCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardCheckCenter: DefineComponent<ClipboardCheckCenterProps>;

export default ClipboardCheckCenter;
export { ClipboardCheckCenter };
