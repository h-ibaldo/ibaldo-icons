import type { DefineComponent } from 'vue';

export interface SplinePointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SplinePointer: DefineComponent<SplinePointerProps>;

export default SplinePointer;
export { SplinePointer };
