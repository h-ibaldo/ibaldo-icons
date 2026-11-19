import type { DefineComponent } from 'vue';

export interface CloudSyncTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSyncTall: DefineComponent<CloudSyncTallProps>;

export default CloudSyncTall;
export { CloudSyncTall };
