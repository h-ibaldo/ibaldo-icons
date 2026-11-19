import type { DefineComponent } from 'vue';

export interface FileLinesSearchCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesSearchCut: DefineComponent<FileLinesSearchCutProps>;

export default FileLinesSearchCut;
export { FileLinesSearchCut };
