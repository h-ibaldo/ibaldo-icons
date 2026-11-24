import type { DefineComponent } from 'vue';

export interface SunPointedLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunPointedLong: DefineComponent<SunPointedLongProps>;

export default SunPointedLong;
export { SunPointedLong };
