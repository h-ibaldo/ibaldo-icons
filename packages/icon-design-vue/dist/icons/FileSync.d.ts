import type { DefineComponent } from 'vue';

export interface FileSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSync: DefineComponent<FileSyncProps>;

export default FileSync;
export { FileSync };
