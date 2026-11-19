import type { DefineComponent } from 'vue';

export interface AvatarHeadBluntBobProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadBluntBob: DefineComponent<AvatarHeadBluntBobProps>;

export default AvatarHeadBluntBob;
export { AvatarHeadBluntBob };
