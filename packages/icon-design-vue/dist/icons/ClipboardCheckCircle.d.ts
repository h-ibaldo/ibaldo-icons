import type { DefineComponent } from 'vue';

export interface ClipboardCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardCheckCircle: DefineComponent<ClipboardCheckCircleProps>;

export default ClipboardCheckCircle;
export { ClipboardCheckCircle };
