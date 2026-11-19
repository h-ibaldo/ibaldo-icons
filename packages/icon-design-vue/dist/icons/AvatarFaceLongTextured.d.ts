import type { DefineComponent } from 'vue';

export interface AvatarFaceLongTexturedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongTextured: DefineComponent<AvatarFaceLongTexturedProps>;

export default AvatarFaceLongTextured;
export { AvatarFaceLongTextured };
