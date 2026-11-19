import type { DefineComponent } from 'vue';

export interface GearWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearWavy: DefineComponent<GearWavyProps>;

export default GearWavy;
export { GearWavy };
