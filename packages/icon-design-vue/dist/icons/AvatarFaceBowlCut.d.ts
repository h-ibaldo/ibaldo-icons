import type { DefineComponent } from 'vue';

export interface AvatarFaceBowlCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceBowlCut: DefineComponent<AvatarFaceBowlCutProps>;

export default AvatarFaceBowlCut;
export { AvatarFaceBowlCut };
