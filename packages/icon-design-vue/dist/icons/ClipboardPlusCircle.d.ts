import type { DefineComponent } from 'vue';

export interface ClipboardPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardPlusCircle: DefineComponent<ClipboardPlusCircleProps>;

export default ClipboardPlusCircle;
export { ClipboardPlusCircle };
