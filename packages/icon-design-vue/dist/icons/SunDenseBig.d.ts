import type { DefineComponent } from 'vue';

export interface SunDenseBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunDenseBig: DefineComponent<SunDenseBigProps>;

export default SunDenseBig;
export { SunDenseBig };
