import type { DefineComponent } from 'vue';

export interface FileLinesDashedCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesDashedCut: DefineComponent<FileLinesDashedCutProps>;

export default FileLinesDashedCut;
export { FileLinesDashedCut };
