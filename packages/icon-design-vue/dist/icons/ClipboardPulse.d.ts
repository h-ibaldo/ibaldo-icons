import type { DefineComponent } from 'vue';

export interface ClipboardPulseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardPulse: DefineComponent<ClipboardPulseProps>;

export default ClipboardPulse;
export { ClipboardPulse };
