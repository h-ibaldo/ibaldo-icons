import type { DefineComponent } from 'vue';

export interface PuzzleGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PuzzleGrid: DefineComponent<PuzzleGridProps>;

export default PuzzleGrid;
export { PuzzleGrid };
