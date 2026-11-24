import type { DefineComponent } from 'vue';

export interface FileLinesCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesCut: DefineComponent<FileLinesCutProps>;

export default FileLinesCut;
export { FileLinesCut };
