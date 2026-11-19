import type { DefineComponent } from 'vue';

export interface CloudSyncCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSyncCornerRound: DefineComponent<CloudSyncCornerRoundProps>;

export default CloudSyncCornerRound;
export { CloudSyncCornerRound };
