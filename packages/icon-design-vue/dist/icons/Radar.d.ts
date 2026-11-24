import type { DefineComponent } from 'vue';

export interface RadarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Radar: DefineComponent<RadarProps>;

export default Radar;
export { Radar };
