import type { DefineComponent } from 'vue';

export interface AvatarHeadCurlyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadCurly: DefineComponent<AvatarHeadCurlyProps>;

export default AvatarHeadCurly;
export { AvatarHeadCurly };
