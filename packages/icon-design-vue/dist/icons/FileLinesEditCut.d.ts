import type { DefineComponent } from 'vue';

export interface FileLinesEditCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesEditCut: DefineComponent<FileLinesEditCutProps>;

export default FileLinesEditCut;
export { FileLinesEditCut };
