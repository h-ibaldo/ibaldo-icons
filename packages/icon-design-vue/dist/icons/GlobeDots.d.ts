import type { DefineComponent } from 'vue';

export interface GlobeDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GlobeDots: DefineComponent<GlobeDotsProps>;

export default GlobeDots;
export { GlobeDots };
