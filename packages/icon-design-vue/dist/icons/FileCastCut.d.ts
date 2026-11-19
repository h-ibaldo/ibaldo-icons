import type { DefineComponent } from 'vue';

export interface FileCastCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCastCut: DefineComponent<FileCastCutProps>;

export default FileCastCut;
export { FileCastCut };
