import type { DefineComponent } from 'vue';

export interface MagnetRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MagnetRight: DefineComponent<MagnetRightProps>;

export default MagnetRight;
export { MagnetRight };
