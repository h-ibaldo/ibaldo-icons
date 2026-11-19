import type { DefineComponent } from 'vue';

export interface FileSearchCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSearchCut: DefineComponent<FileSearchCutProps>;

export default FileSearchCut;
export { FileSearchCut };
