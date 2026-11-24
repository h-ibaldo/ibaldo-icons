import type { DefineComponent } from 'vue';

export interface AvatarHeadSideBangsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSideBangs: DefineComponent<AvatarHeadSideBangsProps>;

export default AvatarHeadSideBangs;
export { AvatarHeadSideBangs };
