import type { DefineComponent } from 'vue';

export interface AvatarFaceCurlyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceCurly: DefineComponent<AvatarFaceCurlyProps>;

export default AvatarFaceCurly;
export { AvatarFaceCurly };
