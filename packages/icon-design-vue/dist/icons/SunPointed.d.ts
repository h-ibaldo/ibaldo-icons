import type { DefineComponent } from 'vue';

export interface SunPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunPointed: DefineComponent<SunPointedProps>;

export default SunPointed;
export { SunPointed };
