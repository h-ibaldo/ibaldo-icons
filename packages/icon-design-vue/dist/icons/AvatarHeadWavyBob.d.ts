import type { DefineComponent } from 'vue';

export interface AvatarHeadWavyBobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadWavyBob: DefineComponent<AvatarHeadWavyBobProps>;

export default AvatarHeadWavyBob;
export { AvatarHeadWavyBob };
