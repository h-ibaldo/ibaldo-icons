import type { DefineComponent } from 'vue';

export interface FlagOffWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagOffWavy: DefineComponent<FlagOffWavyProps>;

export default FlagOffWavy;
export { FlagOffWavy };
