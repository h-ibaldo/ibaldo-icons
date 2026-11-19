import type { DefineComponent } from 'vue';

export interface ArrowDownTrayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDownTray: DefineComponent<ArrowDownTrayProps>;

export default ArrowDownTray;
export { ArrowDownTray };
