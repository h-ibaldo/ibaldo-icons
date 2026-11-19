import type { DefineComponent } from 'vue';

export interface VrHeadsetSensorsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VrHeadsetSensors: DefineComponent<VrHeadsetSensorsProps>;

export default VrHeadsetSensors;
export { VrHeadsetSensors };
