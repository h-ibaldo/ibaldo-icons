import type { DefineComponent } from 'vue';

export interface SpellCheckWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpellCheckWavy: DefineComponent<SpellCheckWavyProps>;

export default SpellCheckWavy;
export { SpellCheckWavy };
