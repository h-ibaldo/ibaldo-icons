import type { DefineComponent } from 'vue';

export interface FileDatabaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileDatabase: DefineComponent<FileDatabaseProps>;

export default FileDatabase;
export { FileDatabase };
