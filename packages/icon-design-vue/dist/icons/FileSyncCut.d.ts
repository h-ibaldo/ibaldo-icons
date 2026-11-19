import type { DefineComponent } from 'vue';

export interface FileSyncCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSyncCut: DefineComponent<FileSyncCutProps>;

export default FileSyncCut;
export { FileSyncCut };
