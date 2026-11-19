import type { DefineComponent } from 'vue';

export interface AvatarHeadAfroProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadAfro: DefineComponent<AvatarHeadAfroProps>;

export default AvatarHeadAfro;
export { AvatarHeadAfro };
