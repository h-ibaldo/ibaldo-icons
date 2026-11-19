import type { DefineComponent } from 'vue';

export interface FilePushpinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePushpin: DefineComponent<FilePushpinProps>;

export default FilePushpin;
export { FilePushpin };
