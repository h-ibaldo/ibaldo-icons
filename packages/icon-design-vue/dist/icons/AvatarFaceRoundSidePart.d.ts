import type { DefineComponent } from 'vue';

export interface AvatarFaceRoundSidePartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceRoundSidePart: DefineComponent<AvatarFaceRoundSidePartProps>;

export default AvatarFaceRoundSidePart;
export { AvatarFaceRoundSidePart };
