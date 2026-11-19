import type { DefineComponent } from 'vue';

export interface SunTinyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunTiny: DefineComponent<SunTinyProps>;

export default SunTiny;
export { SunTiny };
