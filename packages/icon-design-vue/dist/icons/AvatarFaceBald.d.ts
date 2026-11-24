import type { DefineComponent } from 'vue';

export interface AvatarFaceBaldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceBald: DefineComponent<AvatarFaceBaldProps>;

export default AvatarFaceBald;
export { AvatarFaceBald };
