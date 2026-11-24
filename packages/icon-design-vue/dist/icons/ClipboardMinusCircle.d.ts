import type { DefineComponent } from 'vue';

export interface ClipboardMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardMinusCircle: DefineComponent<ClipboardMinusCircleProps>;

export default ClipboardMinusCircle;
export { ClipboardMinusCircle };
