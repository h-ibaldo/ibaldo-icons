import type { DefineComponent } from 'vue';

export interface SunJaggedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunJagged: DefineComponent<SunJaggedProps>;

export default SunJagged;
export { SunJagged };
