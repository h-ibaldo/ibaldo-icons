import type { DefineComponent } from 'vue';

export interface MoonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Moon: DefineComponent<MoonProps>;

export default Moon;
export { Moon };
