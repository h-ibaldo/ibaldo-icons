import type { DefineComponent } from 'vue';

export interface FileStackLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackLines: DefineComponent<FileStackLinesProps>;

export default FileStackLines;
export { FileStackLines };
