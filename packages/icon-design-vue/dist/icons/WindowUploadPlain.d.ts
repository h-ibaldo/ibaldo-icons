import type { DefineComponent } from 'vue';

export interface WindowUploadPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowUploadPlain: DefineComponent<WindowUploadPlainProps>;

export default WindowUploadPlain;
export { WindowUploadPlain };
