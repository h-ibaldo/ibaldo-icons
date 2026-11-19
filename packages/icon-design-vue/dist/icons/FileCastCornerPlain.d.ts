import type { DefineComponent } from 'vue';

export interface FileCastCornerPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCastCornerPlain: DefineComponent<FileCastCornerPlainProps>;

export default FileCastCornerPlain;
export { FileCastCornerPlain };
