import type { DefineComponent } from 'vue';

export interface FilePlusPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusPlain: DefineComponent<FilePlusPlainProps>;

export default FilePlusPlain;
export { FilePlusPlain };
