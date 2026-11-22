import type { DefineComponent } from 'vue';

export interface FileVideoCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileVideoCut: DefineComponent<FileVideoCutProps>;

export default FileVideoCut;
export { FileVideoCut };
