import type { DefineComponent } from 'vue';

export interface SprayCanLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SprayCanLines: DefineComponent<SprayCanLinesProps>;

export default SprayCanLines;
export { SprayCanLines };
