import type { DefineComponent } from 'vue';

export interface FilePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlain: DefineComponent<FilePlainProps>;

export default FilePlain;
export { FilePlain };
