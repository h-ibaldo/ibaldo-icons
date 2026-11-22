import type { DefineComponent } from 'vue';

export interface PencilRulerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilRulerRound: DefineComponent<PencilRulerRoundProps>;

export default PencilRulerRound;
export { PencilRulerRound };
