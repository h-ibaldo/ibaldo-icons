import type { DefineComponent } from 'vue';

export interface FileXCircleCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXCircleCut: DefineComponent<FileXCircleCutProps>;

export default FileXCircleCut;
export { FileXCircleCut };
