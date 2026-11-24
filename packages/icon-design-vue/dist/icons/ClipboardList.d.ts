import type { DefineComponent } from 'vue';

export interface ClipboardListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardList: DefineComponent<ClipboardListProps>;

export default ClipboardList;
export { ClipboardList };
