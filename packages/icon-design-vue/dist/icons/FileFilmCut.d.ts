import type { DefineComponent } from 'vue';

export interface FileFilmCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileFilmCut: DefineComponent<FileFilmCutProps>;

export default FileFilmCut;
export { FileFilmCut };
