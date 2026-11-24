import type { DefineComponent } from 'vue';

export interface EyeSquareArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeSquareArc: DefineComponent<EyeSquareArcProps>;

export default EyeSquareArc;
export { EyeSquareArc };
