import type { DefineComponent } from 'vue';

export interface FlagLeftWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagLeftWavy: DefineComponent<FlagLeftWavyProps>;

export default FlagLeftWavy;
export { FlagLeftWavy };
