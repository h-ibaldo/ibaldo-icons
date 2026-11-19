import type { DefineComponent } from 'vue';

export interface AvatarHeadMohawkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadMohawk: DefineComponent<AvatarHeadMohawkProps>;

export default AvatarHeadMohawk;
export { AvatarHeadMohawk };
