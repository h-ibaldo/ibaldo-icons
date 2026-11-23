import type { DefineComponent } from 'vue';

export interface FileOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileOffWide: DefineComponent<FileOffWideProps>;

export default FileOffWide;
export { FileOffWide };
