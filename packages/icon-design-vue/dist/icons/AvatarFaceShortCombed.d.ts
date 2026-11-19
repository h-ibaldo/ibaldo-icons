import type { DefineComponent } from 'vue';

export interface AvatarFaceShortCombedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceShortCombed: DefineComponent<AvatarFaceShortCombedProps>;

export default AvatarFaceShortCombed;
export { AvatarFaceShortCombed };
