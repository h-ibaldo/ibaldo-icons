import type { DefineComponent } from 'vue';

export interface PuzzleGridMissingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PuzzleGridMissing: DefineComponent<PuzzleGridMissingProps>;

export default PuzzleGridMissing;
export { PuzzleGridMissing };
