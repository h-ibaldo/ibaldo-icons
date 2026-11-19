import type { DefineComponent } from 'vue';

export interface FileUserCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileUserCut: DefineComponent<FileUserCutProps>;

export default FileUserCut;
export { FileUserCut };
