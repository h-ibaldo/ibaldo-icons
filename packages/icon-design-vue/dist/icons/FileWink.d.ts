import type { DefineComponent } from 'vue';

export interface FileWinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileWink: DefineComponent<FileWinkProps>;

export default FileWink;
export { FileWink };
