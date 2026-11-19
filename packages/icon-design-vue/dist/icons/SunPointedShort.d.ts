import type { DefineComponent } from 'vue';

export interface SunPointedShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunPointedShort: DefineComponent<SunPointedShortProps>;

export default SunPointedShort;
export { SunPointedShort };
