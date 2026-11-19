import type { DefineComponent } from 'vue';

export interface FileStackBracketsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackBrackets: DefineComponent<FileStackBracketsProps>;

export default FileStackBrackets;
export { FileStackBrackets };
