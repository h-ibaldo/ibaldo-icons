import type { DefineComponent } from 'vue';

export interface FileArticlePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileArticlePlain: DefineComponent<FileArticlePlainProps>;

export default FileArticlePlain;
export { FileArticlePlain };
