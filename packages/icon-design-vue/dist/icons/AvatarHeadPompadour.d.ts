import type { DefineComponent } from 'vue';

export interface AvatarHeadPompadourProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadPompadour: DefineComponent<AvatarHeadPompadourProps>;

export default AvatarHeadPompadour;
export { AvatarHeadPompadour };
