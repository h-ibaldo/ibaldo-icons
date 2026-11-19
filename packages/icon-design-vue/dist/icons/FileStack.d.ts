import type { DefineComponent } from 'vue';

export interface FileStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStack: DefineComponent<FileStackProps>;

export default FileStack;
export { FileStack };
