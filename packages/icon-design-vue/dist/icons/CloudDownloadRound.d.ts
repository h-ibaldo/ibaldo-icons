import type { DefineComponent } from 'vue';

export interface CloudDownloadRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudDownloadRound: DefineComponent<CloudDownloadRoundProps>;

export default CloudDownloadRound;
export { CloudDownloadRound };
