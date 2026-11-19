import type { DefineComponent } from 'vue';

export interface FilePlusCornerPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCornerPlain: DefineComponent<FilePlusCornerPlainProps>;

export default FilePlusCornerPlain;
export { FilePlusCornerPlain };
