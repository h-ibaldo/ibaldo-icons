import type { DefineComponent } from 'vue';

export interface AvatarFaceCurlyBobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceCurlyBob: DefineComponent<AvatarFaceCurlyBobProps>;

export default AvatarFaceCurlyBob;
export { AvatarFaceCurlyBob };
