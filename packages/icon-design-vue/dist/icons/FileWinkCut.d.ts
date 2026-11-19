import type { DefineComponent } from 'vue';

export interface FileWinkCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileWinkCut: DefineComponent<FileWinkCutProps>;

export default FileWinkCut;
export { FileWinkCut };
