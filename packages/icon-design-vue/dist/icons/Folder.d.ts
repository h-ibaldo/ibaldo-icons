import type { DefineComponent } from 'vue';

export interface FolderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Folder: DefineComponent<FolderProps>;

export default Folder;
export { Folder };
