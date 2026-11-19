import type { DefineComponent } from 'vue';

export interface AvatarHeadCrewCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadCrewCut: DefineComponent<AvatarHeadCrewCutProps>;

export default AvatarHeadCrewCut;
export { AvatarHeadCrewCut };
