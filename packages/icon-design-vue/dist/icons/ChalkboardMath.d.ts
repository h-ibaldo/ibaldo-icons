import type { DefineComponent } from 'vue';

export interface ChalkboardMathProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChalkboardMath: DefineComponent<ChalkboardMathProps>;

export default ChalkboardMath;
export { ChalkboardMath };
