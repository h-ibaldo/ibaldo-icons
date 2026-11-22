import type { DefineComponent } from 'vue';

export interface RadarBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RadarBroken: DefineComponent<RadarBrokenProps>;

export default RadarBroken;
export { RadarBroken };
