import type { DefineComponent } from 'vue';

export interface FileKeyCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileKeyCut: DefineComponent<FileKeyCutProps>;

export default FileKeyCut;
export { FileKeyCut };
