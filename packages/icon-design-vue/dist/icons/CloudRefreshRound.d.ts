import type { DefineComponent } from 'vue';

export interface CloudRefreshRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudRefreshRound: DefineComponent<CloudRefreshRoundProps>;

export default CloudRefreshRound;
export { CloudRefreshRound };
