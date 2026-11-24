import type { DefineComponent } from 'vue';

export interface FolderClockCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderClockCorner: DefineComponent<FolderClockCornerProps>;

export default FolderClockCorner;
export { FolderClockCorner };
