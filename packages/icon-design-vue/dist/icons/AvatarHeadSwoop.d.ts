import type { DefineComponent } from 'vue';

export interface AvatarHeadSwoopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSwoop: DefineComponent<AvatarHeadSwoopProps>;

export default AvatarHeadSwoop;
export { AvatarHeadSwoop };
