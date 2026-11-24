import type { DefineComponent } from 'vue';

export interface FilePlusCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCut: DefineComponent<FilePlusCutProps>;

export default FilePlusCut;
export { FilePlusCut };
