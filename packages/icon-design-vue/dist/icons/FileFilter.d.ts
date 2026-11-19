import type { DefineComponent } from 'vue';

export interface FileFilterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileFilter: DefineComponent<FileFilterProps>;

export default FileFilter;
export { FileFilter };
