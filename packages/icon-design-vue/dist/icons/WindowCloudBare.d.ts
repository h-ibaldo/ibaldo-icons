import type { DefineComponent } from 'vue';

export interface WindowCloudBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCloudBare: DefineComponent<WindowCloudBareProps>;

export default WindowCloudBare;
export { WindowCloudBare };
