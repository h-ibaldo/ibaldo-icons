import type { DefineComponent } from 'vue';

export interface GlobeTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeTilted: DefineComponent<GlobeTiltedProps>;

export default GlobeTilted;
export { GlobeTilted };
