import type { DefineComponent } from 'vue';

export interface FileMinusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMinusWide: DefineComponent<FileMinusWideProps>;

export default FileMinusWide;
export { FileMinusWide };
