import type { DefineComponent } from 'vue';

export interface FileArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArrowDown: DefineComponent<FileArrowDownProps>;

export default FileArrowDown;
export { FileArrowDown };
