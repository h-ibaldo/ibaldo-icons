import type { DefineComponent } from 'vue';

export interface BellRingLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRingLines: DefineComponent<BellRingLinesProps>;

export default BellRingLines;
export { BellRingLines };
