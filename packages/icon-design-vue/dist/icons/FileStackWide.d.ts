import type { DefineComponent } from 'vue';

export interface FileStackWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackWide: DefineComponent<FileStackWideProps>;

export default FileStackWide;
export { FileStackWide };
