import type { DefineComponent } from 'vue';

export interface FileEditLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditLeft: DefineComponent<FileEditLeftProps>;

export default FileEditLeft;
export { FileEditLeft };
