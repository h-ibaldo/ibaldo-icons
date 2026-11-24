import type { DefineComponent } from 'vue';

export interface AvatarFaceSwoopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSwoop: DefineComponent<AvatarFaceSwoopProps>;

export default AvatarFaceSwoop;
export { AvatarFaceSwoop };
