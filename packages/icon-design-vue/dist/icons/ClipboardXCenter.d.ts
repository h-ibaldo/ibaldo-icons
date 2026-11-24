import type { DefineComponent } from 'vue';

export interface ClipboardXCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardXCenter: DefineComponent<ClipboardXCenterProps>;

export default ClipboardXCenter;
export { ClipboardXCenter };
