import type { DefineComponent } from 'vue';

export interface AvatarHeadCurlyBobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadCurlyBob: DefineComponent<AvatarHeadCurlyBobProps>;

export default AvatarHeadCurlyBob;
export { AvatarHeadCurlyBob };
