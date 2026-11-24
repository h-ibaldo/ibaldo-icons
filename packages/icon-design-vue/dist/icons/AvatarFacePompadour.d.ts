import type { DefineComponent } from 'vue';

export interface AvatarFacePompadourProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFacePompadour: DefineComponent<AvatarFacePompadourProps>;

export default AvatarFacePompadour;
export { AvatarFacePompadour };
