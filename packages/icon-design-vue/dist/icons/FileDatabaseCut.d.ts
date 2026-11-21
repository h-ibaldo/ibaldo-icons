import type { DefineComponent } from 'vue';

export interface FileDatabaseCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileDatabaseCut: DefineComponent<FileDatabaseCutProps>;

export default FileDatabaseCut;
export { FileDatabaseCut };
