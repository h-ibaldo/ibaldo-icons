import type { DefineComponent } from 'vue';

export interface FileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const File: DefineComponent<FileProps>;

export default File;
export { File };
