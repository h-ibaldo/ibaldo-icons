import type { DefineComponent } from 'vue';

export interface CloudSyncRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSyncRound: DefineComponent<CloudSyncRoundProps>;

export default CloudSyncRound;
export { CloudSyncRound };
