import type { DefineComponent } from 'vue';

export interface PenToolBezierProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PenToolBezier: DefineComponent<PenToolBezierProps>;

export default PenToolBezier;
export { PenToolBezier };
