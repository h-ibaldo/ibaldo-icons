import type { DefineComponent } from 'vue';

export interface EyeOffArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeOffArc: DefineComponent<EyeOffArcProps>;

export default EyeOffArc;
export { EyeOffArc };
