import type { DefineComponent } from 'vue';

export interface WindowCloudPuffyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCloudPuffy: DefineComponent<WindowCloudPuffyProps>;

export default WindowCloudPuffy;
export { WindowCloudPuffy };
