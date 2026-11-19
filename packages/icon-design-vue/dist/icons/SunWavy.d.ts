import type { DefineComponent } from 'vue';

export interface SunWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunWavy: DefineComponent<SunWavyProps>;

export default SunWavy;
export { SunWavy };
