import type { DefineComponent } from 'vue';

export interface FileStarPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStarPlain: DefineComponent<FileStarPlainProps>;

export default FileStarPlain;
export { FileStarPlain };
