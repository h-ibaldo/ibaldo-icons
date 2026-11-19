import type { DefineComponent } from 'vue';

export interface FileEditCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditCornerCut: DefineComponent<FileEditCornerCutProps>;

export default FileEditCornerCut;
export { FileEditCornerCut };
