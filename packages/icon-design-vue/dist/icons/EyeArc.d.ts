import type { DefineComponent } from 'vue';

export interface EyeArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeArc: DefineComponent<EyeArcProps>;

export default EyeArc;
export { EyeArc };
