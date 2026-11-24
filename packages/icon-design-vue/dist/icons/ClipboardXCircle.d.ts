import type { DefineComponent } from 'vue';

export interface ClipboardXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardXCircle: DefineComponent<ClipboardXCircleProps>;

export default ClipboardXCircle;
export { ClipboardXCircle };
