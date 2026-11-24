import type { DefineComponent } from 'vue';

export interface FileLinesDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesDashed: DefineComponent<FileLinesDashedProps>;

export default FileLinesDashed;
export { FileLinesDashed };
