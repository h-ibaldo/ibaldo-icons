import type { DefineComponent } from 'vue';

export interface AvatarHeadShortCombedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadShortCombed: DefineComponent<AvatarHeadShortCombedProps>;

export default AvatarHeadShortCombed;
export { AvatarHeadShortCombed };
