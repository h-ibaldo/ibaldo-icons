import type { DefineComponent } from 'vue';

export interface FolderAjarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderAjar: DefineComponent<FolderAjarProps>;

export default FolderAjar;
export { FolderAjar };
