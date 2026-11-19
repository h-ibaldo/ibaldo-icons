import type { DefineComponent } from 'vue';

export interface FileLinesSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesSearch: DefineComponent<FileLinesSearchProps>;

export default FileLinesSearch;
export { FileLinesSearch };
