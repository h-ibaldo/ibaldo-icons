import type { DefineComponent } from 'vue';

export interface AvatarFaceWavyBobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceWavyBob: DefineComponent<AvatarFaceWavyBobProps>;

export default AvatarFaceWavyBob;
export { AvatarFaceWavyBob };
