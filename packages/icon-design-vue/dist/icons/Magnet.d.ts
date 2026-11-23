import type { DefineComponent } from 'vue';

export interface MagnetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Magnet: DefineComponent<MagnetProps>;

export default Magnet;
export { Magnet };
