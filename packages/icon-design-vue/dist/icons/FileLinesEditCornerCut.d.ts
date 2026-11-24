import type { DefineComponent } from 'vue';

export interface FileLinesEditCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesEditCornerCut: DefineComponent<FileLinesEditCornerCutProps>;

export default FileLinesEditCornerCut;
export { FileLinesEditCornerCut };
