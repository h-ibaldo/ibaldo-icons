import type { DefineComponent } from 'vue';

export interface FilePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlus: DefineComponent<FilePlusProps>;

export default FilePlus;
export { FilePlus };
