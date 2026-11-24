import type { DefineComponent } from 'vue';

export interface FileUserDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileUserDouble: DefineComponent<FileUserDoubleProps>;

export default FileUserDouble;
export { FileUserDouble };
