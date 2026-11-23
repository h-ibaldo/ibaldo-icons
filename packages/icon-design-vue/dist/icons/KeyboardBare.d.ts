import type { DefineComponent } from 'vue';

export interface KeyboardBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyboardBare: DefineComponent<KeyboardBareProps>;

export default KeyboardBare;
export { KeyboardBare };
