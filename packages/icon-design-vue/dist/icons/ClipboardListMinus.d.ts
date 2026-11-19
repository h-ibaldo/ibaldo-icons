import type { DefineComponent } from 'vue';

export interface ClipboardListMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardListMinus: DefineComponent<ClipboardListMinusProps>;

export default ClipboardListMinus;
export { ClipboardListMinus };
