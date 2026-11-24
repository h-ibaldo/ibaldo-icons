import type { DefineComponent } from 'vue';

export interface FileTrianglePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileTrianglePlain: DefineComponent<FileTrianglePlainProps>;

export default FileTrianglePlain;
export { FileTrianglePlain };
