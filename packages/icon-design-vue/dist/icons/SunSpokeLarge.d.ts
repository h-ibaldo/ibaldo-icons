import type { DefineComponent } from 'vue';

export interface SunSpokeLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunSpokeLarge: DefineComponent<SunSpokeLargeProps>;

export default SunSpokeLarge;
export { SunSpokeLarge };
