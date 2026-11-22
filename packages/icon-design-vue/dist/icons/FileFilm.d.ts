import type { DefineComponent } from 'vue';

export interface FileFilmProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileFilm: DefineComponent<FileFilmProps>;

export default FileFilm;
export { FileFilm };
