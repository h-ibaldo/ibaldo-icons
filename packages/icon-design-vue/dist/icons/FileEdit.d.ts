import type { DefineComponent } from 'vue';

export interface FileEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEdit: DefineComponent<FileEditProps>;

export default FileEdit;
export { FileEdit };
