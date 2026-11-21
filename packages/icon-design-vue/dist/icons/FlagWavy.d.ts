import type { DefineComponent } from 'vue';

export interface FlagWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagWavy: DefineComponent<FlagWavyProps>;

export default FlagWavy;
export { FlagWavy };
