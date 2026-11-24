import type { DefineComponent } from 'vue';

export interface FileXWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXWide: DefineComponent<FileXWideProps>;

export default FileXWide;
export { FileXWide };
