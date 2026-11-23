import type { DefineComponent } from 'vue';

export interface ScalingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Scaling: DefineComponent<ScalingProps>;

export default Scaling;
export { Scaling };
