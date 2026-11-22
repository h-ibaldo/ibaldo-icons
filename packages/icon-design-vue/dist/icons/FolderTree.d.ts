import type { DefineComponent } from 'vue';

export interface FolderTreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderTree: DefineComponent<FolderTreeProps>;

export default FolderTree;
export { FolderTree };
