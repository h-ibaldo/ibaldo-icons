import type { DefineComponent } from 'vue';

export interface FilePlusCircleCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCircleCut: DefineComponent<FilePlusCircleCutProps>;

export default FilePlusCircleCut;
export { FilePlusCircleCut };
