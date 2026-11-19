import type { DefineComponent } from 'vue';

export interface VrHeadsetUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VrHeadsetUser: DefineComponent<VrHeadsetUserProps>;

export default VrHeadsetUser;
export { VrHeadsetUser };
