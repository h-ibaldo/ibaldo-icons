import type { DefineComponent } from 'vue';

export interface FileCheckCircleCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckCircleCut: DefineComponent<FileCheckCircleCutProps>;

export default FileCheckCircleCut;
export { FileCheckCircleCut };
