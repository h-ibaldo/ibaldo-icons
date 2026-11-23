import type { DefineComponent } from 'vue';

export interface MagnetBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MagnetBolt: DefineComponent<MagnetBoltProps>;

export default MagnetBolt;
export { MagnetBolt };
