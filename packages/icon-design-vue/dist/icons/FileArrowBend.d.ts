import type { DefineComponent } from 'vue';

export interface FileArrowBendProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArrowBend: DefineComponent<FileArrowBendProps>;

export default FileArrowBend;
export { FileArrowBend };
