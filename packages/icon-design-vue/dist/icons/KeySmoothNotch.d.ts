import type { DefineComponent } from 'vue';

export interface KeySmoothNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeySmoothNotch: DefineComponent<KeySmoothNotchProps>;

export default KeySmoothNotch;
export { KeySmoothNotch };
