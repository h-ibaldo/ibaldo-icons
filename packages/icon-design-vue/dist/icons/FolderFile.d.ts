import type { DefineComponent } from 'vue';

export interface FolderFileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderFile: DefineComponent<FolderFileProps>;

export default FolderFile;
export { FolderFile };
