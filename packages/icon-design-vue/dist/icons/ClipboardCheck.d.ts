import type { DefineComponent } from 'vue';

export interface ClipboardCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardCheck: DefineComponent<ClipboardCheckProps>;

export default ClipboardCheck;
export { ClipboardCheck };
