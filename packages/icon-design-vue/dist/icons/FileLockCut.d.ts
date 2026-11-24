import type { DefineComponent } from 'vue';

export interface FileLockCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLockCut: DefineComponent<FileLockCutProps>;

export default FileLockCut;
export { FileLockCut };
