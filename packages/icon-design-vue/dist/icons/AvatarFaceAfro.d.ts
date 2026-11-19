import type { DefineComponent } from 'vue';

export interface AvatarFaceAfroProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceAfro: DefineComponent<AvatarFaceAfroProps>;

export default AvatarFaceAfro;
export { AvatarFaceAfro };
