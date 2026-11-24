import type { DefineComponent } from 'vue';

export interface GearDownloadWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearDownloadWavy: DefineComponent<GearDownloadWavyProps>;

export default GearDownloadWavy;
export { GearDownloadWavy };
