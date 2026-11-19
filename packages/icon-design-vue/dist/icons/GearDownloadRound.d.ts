import type { DefineComponent } from 'vue';

export interface GearDownloadRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearDownloadRound: DefineComponent<GearDownloadRoundProps>;

export default GearDownloadRound;
export { GearDownloadRound };
