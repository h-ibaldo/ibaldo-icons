import type { DefineComponent } from 'vue';

export interface ClipboardListPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardListPlus: DefineComponent<ClipboardListPlusProps>;

export default ClipboardListPlus;
export { ClipboardListPlus };
