import type { DefineComponent } from 'vue';

export interface FileImageInsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImageInset: DefineComponent<FileImageInsetProps>;

export default FileImageInset;
export { FileImageInset };
