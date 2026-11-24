import type { DefineComponent } from 'vue';

export interface AvatarFaceMohawkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarFaceMohawk: DefineComponent<AvatarFaceMohawkProps>;

export default AvatarFaceMohawk;
export { AvatarFaceMohawk };
