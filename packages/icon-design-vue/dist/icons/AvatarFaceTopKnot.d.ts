import type { DefineComponent } from 'vue';

export interface AvatarFaceTopKnotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceTopKnot: DefineComponent<AvatarFaceTopKnotProps>;

export default AvatarFaceTopKnot;
export { AvatarFaceTopKnot };
