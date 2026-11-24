import type { DefineComponent } from 'vue';

export interface FileCodeRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCodeRight: DefineComponent<FileCodeRightProps>;

export default FileCodeRight;
export { FileCodeRight };
