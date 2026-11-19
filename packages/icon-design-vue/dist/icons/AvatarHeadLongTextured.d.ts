import type { DefineComponent } from 'vue';

export interface AvatarHeadLongTexturedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadLongTextured: DefineComponent<AvatarHeadLongTexturedProps>;

export default AvatarHeadLongTextured;
export { AvatarHeadLongTextured };
