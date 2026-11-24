import type { DefineComponent } from 'vue';

export interface FileLinesLeftCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesLeftCut: DefineComponent<FileLinesLeftCutProps>;

export default FileLinesLeftCut;
export { FileLinesLeftCut };
