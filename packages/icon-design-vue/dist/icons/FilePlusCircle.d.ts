import type { DefineComponent } from 'vue';

export interface FilePlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCircle: DefineComponent<FilePlusCircleProps>;

export default FilePlusCircle;
export { FilePlusCircle };
