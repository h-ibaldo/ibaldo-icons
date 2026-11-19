import type { DefineComponent } from 'vue';

export interface AvatarFaceSpikyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSpiky: DefineComponent<AvatarFaceSpikyProps>;

export default AvatarFaceSpiky;
export { AvatarFaceSpiky };
