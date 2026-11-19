import type { DefineComponent } from 'vue';

export interface VrHeadsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VrHeadset: DefineComponent<VrHeadsetProps>;

export default VrHeadset;
export { VrHeadset };
