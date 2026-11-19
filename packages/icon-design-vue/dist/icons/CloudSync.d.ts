import type { DefineComponent } from 'vue';

export interface CloudSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSync: DefineComponent<CloudSyncProps>;

export default CloudSync;
export { CloudSync };
