import type { DefineComponent } from 'vue';

export interface PuzzleKnobsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PuzzleKnobs: DefineComponent<PuzzleKnobsProps>;

export default PuzzleKnobs;
export { PuzzleKnobs };
