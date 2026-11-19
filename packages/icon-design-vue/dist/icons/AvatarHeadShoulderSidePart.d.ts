import type { DefineComponent } from 'vue';

export interface AvatarHeadShoulderSidePartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadShoulderSidePart: DefineComponent<AvatarHeadShoulderSidePartProps>;

export default AvatarHeadShoulderSidePart;
export { AvatarHeadShoulderSidePart };
