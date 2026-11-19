import type { DefineComponent } from 'vue';

export interface SunStarStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunStarStriped: DefineComponent<SunStarStripedProps>;

export default SunStarStriped;
export { SunStarStriped };
