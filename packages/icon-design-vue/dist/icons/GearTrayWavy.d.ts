import type { DefineComponent } from 'vue';

export interface GearTrayWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearTrayWavy: DefineComponent<GearTrayWavyProps>;

export default GearTrayWavy;
export { GearTrayWavy };
