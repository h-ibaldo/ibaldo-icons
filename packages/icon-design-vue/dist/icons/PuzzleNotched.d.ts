import type { DefineComponent } from 'vue';

export interface PuzzleNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PuzzleNotched: DefineComponent<PuzzleNotchedProps>;

export default PuzzleNotched;
export { PuzzleNotched };
