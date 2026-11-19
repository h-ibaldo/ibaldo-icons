import type { DefineComponent } from 'vue';

export interface AvatarHeadFlatTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadFlatTop: DefineComponent<AvatarHeadFlatTopProps>;

export default AvatarHeadFlatTop;
export { AvatarHeadFlatTop };
