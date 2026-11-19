import type { DefineComponent } from 'vue';

export interface ArrowUpTrayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowUpTray: DefineComponent<ArrowUpTrayProps>;

export default ArrowUpTray;
export { ArrowUpTray };
