import type { DefineComponent } from 'vue';

export interface MoonSunProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoonSun: DefineComponent<MoonSunProps>;

export default MoonSun;
export { MoonSun };
