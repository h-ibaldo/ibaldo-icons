import type { DefineComponent } from 'vue';

export interface OptionsDotsAsteriskProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OptionsDotsAsterisk: DefineComponent<OptionsDotsAsteriskProps>;

export default OptionsDotsAsterisk;
export { OptionsDotsAsterisk };
