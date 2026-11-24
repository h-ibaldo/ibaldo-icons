import type { DefineComponent } from 'vue';

export interface FileStackLinesCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackLinesCut: DefineComponent<FileStackLinesCutProps>;

export default FileStackLinesCut;
export { FileStackLinesCut };
