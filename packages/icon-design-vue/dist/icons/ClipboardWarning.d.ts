import type { DefineComponent } from 'vue';

export interface ClipboardWarningProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardWarning: DefineComponent<ClipboardWarningProps>;

export default ClipboardWarning;
export { ClipboardWarning };
