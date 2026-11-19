import type { DefineComponent } from 'vue';

export interface FileImageInsetPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImageInsetPlain: DefineComponent<FileImageInsetPlainProps>;

export default FileImageInsetPlain;
export { FileImageInsetPlain };
