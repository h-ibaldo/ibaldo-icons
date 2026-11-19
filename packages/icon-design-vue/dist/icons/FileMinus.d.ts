import type { DefineComponent } from 'vue';

export interface FileMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinus: DefineComponent<FileMinusProps>;

export default FileMinus;
export { FileMinus };
