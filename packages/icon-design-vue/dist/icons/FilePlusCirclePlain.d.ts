import type { DefineComponent } from 'vue';

export interface FilePlusCirclePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCirclePlain: DefineComponent<FilePlusCirclePlainProps>;

export default FilePlusCirclePlain;
export { FilePlusCirclePlain };
