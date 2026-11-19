import type { DefineComponent } from 'vue';

export interface FolderOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderOpen: DefineComponent<FolderOpenProps>;

export default FolderOpen;
export { FolderOpen };
