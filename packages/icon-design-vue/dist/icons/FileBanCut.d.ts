import type { DefineComponent } from 'vue';

export interface FileBanCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileBanCut: DefineComponent<FileBanCutProps>;

export default FileBanCut;
export { FileBanCut };
