import type { DefineComponent } from 'vue';

export interface FileCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckCircle: DefineComponent<FileCheckCircleProps>;

export default FileCheckCircle;
export { FileCheckCircle };
