import type { DefineComponent } from 'vue';

export interface GearUploadWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearUploadWavy: DefineComponent<GearUploadWavyProps>;

export default GearUploadWavy;
export { GearUploadWavy };
