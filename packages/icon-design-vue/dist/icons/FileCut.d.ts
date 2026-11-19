import type { DefineComponent } from 'vue';

export interface FileCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCut: DefineComponent<FileCutProps>;

export default FileCut;
export { FileCut };
