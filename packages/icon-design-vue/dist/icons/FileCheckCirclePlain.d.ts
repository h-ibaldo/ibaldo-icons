import type { DefineComponent } from 'vue';

export interface FileCheckCirclePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckCirclePlain: DefineComponent<FileCheckCirclePlainProps>;

export default FileCheckCirclePlain;
export { FileCheckCirclePlain };
