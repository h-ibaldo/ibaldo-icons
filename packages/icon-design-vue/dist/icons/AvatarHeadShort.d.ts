import type { DefineComponent } from 'vue';

export interface AvatarHeadShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadShort: DefineComponent<AvatarHeadShortProps>;

export default AvatarHeadShort;
export { AvatarHeadShort };
