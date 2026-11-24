import type { DefineComponent } from 'vue';

export interface FileStackLinesPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackLinesPlain: DefineComponent<FileStackLinesPlainProps>;

export default FileStackLinesPlain;
export { FileStackLinesPlain };
