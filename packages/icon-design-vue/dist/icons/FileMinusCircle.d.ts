import type { DefineComponent } from 'vue';

export interface FileMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinusCircle: DefineComponent<FileMinusCircleProps>;

export default FileMinusCircle;
export { FileMinusCircle };
