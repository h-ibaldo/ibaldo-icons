import type { DefineComponent } from 'vue';

export interface AvatarHeadBaldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadBald: DefineComponent<AvatarHeadBaldProps>;

export default AvatarHeadBald;
export { AvatarHeadBald };
