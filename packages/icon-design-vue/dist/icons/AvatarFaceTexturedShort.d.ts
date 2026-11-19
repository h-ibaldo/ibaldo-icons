import type { DefineComponent } from 'vue';

export interface AvatarFaceTexturedShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceTexturedShort: DefineComponent<AvatarFaceTexturedShortProps>;

export default AvatarFaceTexturedShort;
export { AvatarFaceTexturedShort };
