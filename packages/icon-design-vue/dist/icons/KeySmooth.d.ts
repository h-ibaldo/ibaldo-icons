import type { DefineComponent } from 'vue';

export interface KeySmoothProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeySmooth: DefineComponent<KeySmoothProps>;

export default KeySmooth;
export { KeySmooth };
