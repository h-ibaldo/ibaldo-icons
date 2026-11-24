import type { DefineComponent } from 'vue';

export interface WindowCloudCenterBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCloudCenterBare: DefineComponent<WindowCloudCenterBareProps>;

export default WindowCloudCenterBare;
export { WindowCloudCenterBare };
