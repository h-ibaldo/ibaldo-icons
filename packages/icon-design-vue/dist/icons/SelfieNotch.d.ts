import type { DefineComponent } from 'vue';

export interface SelfieNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SelfieNotch: DefineComponent<SelfieNotchProps>;

export default SelfieNotch;
export { SelfieNotch };
