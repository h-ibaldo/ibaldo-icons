import type { DefineComponent } from 'vue';

export interface CloudSyncCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSyncCorner: DefineComponent<CloudSyncCornerProps>;

export default CloudSyncCorner;
export { CloudSyncCorner };
