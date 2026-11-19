import type { DefineComponent } from 'vue';

export interface PuzzleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Puzzle: DefineComponent<PuzzleProps>;

export default Puzzle;
export { Puzzle };
