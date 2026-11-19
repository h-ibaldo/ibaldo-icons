import type { DefineComponent } from 'vue';

export interface FileUnlockCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileUnlockCut: DefineComponent<FileUnlockCutProps>;

export default FileUnlockCut;
export { FileUnlockCut };
