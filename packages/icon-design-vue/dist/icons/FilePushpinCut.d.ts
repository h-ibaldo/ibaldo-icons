import type { DefineComponent } from 'vue';

export interface FilePushpinCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePushpinCut: DefineComponent<FilePushpinCutProps>;

export default FilePushpinCut;
export { FilePushpinCut };
