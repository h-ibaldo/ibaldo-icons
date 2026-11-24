import type { DefineComponent } from 'vue';

export interface FileWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileWide: DefineComponent<FileWideProps>;

export default FileWide;
export { FileWide };
