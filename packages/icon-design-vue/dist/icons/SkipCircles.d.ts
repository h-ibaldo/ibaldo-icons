import type { DefineComponent } from 'vue';

export interface SkipCirclesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipCircles: DefineComponent<SkipCirclesProps>;

export default SkipCircles;
export { SkipCircles };
