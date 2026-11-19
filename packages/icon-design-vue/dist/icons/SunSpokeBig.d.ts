import type { DefineComponent } from 'vue';

export interface SunSpokeBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunSpokeBig: DefineComponent<SunSpokeBigProps>;

export default SunSpokeBig;
export { SunSpokeBig };
