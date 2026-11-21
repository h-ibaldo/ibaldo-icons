import type { DefineComponent } from 'vue';

export interface FileCheckWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCheckWide: DefineComponent<FileCheckWideProps>;

export default FileCheckWide;
export { FileCheckWide };
