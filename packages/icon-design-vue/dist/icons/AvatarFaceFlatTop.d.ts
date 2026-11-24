import type { DefineComponent } from 'vue';

export interface AvatarFaceFlatTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceFlatTop: DefineComponent<AvatarFaceFlatTopProps>;

export default AvatarFaceFlatTop;
export { AvatarFaceFlatTop };
