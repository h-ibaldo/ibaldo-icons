import type { DefineComponent } from 'vue';

export interface OptionsCheckAsteriskProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsCheckAsterisk: DefineComponent<OptionsCheckAsteriskProps>;

export default OptionsCheckAsterisk;
export { OptionsCheckAsterisk };
