import type { DefineComponent } from 'vue';

export interface FileLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLines: DefineComponent<FileLinesProps>;

export default FileLines;
export { FileLines };
