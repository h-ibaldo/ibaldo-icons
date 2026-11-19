import type { DefineComponent } from 'vue';

export interface SquareStackLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackLines: DefineComponent<SquareStackLinesProps>;

export default SquareStackLines;
export { SquareStackLines };
