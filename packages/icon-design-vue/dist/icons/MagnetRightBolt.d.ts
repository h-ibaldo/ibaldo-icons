import type { DefineComponent } from 'vue';

export interface MagnetRightBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MagnetRightBolt: DefineComponent<MagnetRightBoltProps>;

export default MagnetRightBolt;
export { MagnetRightBolt };
