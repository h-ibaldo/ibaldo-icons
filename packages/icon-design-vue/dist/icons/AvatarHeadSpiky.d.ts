import type { DefineComponent } from 'vue';

export interface AvatarHeadSpikyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSpiky: DefineComponent<AvatarHeadSpikyProps>;

export default AvatarHeadSpiky;
export { AvatarHeadSpiky };
