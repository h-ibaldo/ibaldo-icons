import type { DefineComponent } from 'vue';

export interface FilePushpinPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePushpinPlain: DefineComponent<FilePushpinPlainProps>;

export default FilePushpinPlain;
export { FilePushpinPlain };
