import type { DefineComponent } from 'vue';

export interface WindowCloudPuffyBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCloudPuffyBare: DefineComponent<WindowCloudPuffyBareProps>;

export default WindowCloudPuffyBare;
export { WindowCloudPuffyBare };
