import type { DefineComponent } from 'vue';

export interface FileJoinedCodeCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileJoinedCodeCut: DefineComponent<FileJoinedCodeCutProps>;

export default FileJoinedCodeCut;
export { FileJoinedCodeCut };
