import type { DefineComponent } from 'vue';

export interface VrHeadsetGogglesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VrHeadsetGoggles: DefineComponent<VrHeadsetGogglesProps>;

export default VrHeadsetGoggles;
export { VrHeadsetGoggles };
