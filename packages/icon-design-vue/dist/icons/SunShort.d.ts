import type { DefineComponent } from 'vue';

export interface SunShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunShort: DefineComponent<SunShortProps>;

export default SunShort;
export { SunShort };
