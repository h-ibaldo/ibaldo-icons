import type { DefineComponent } from 'vue';

export interface KeypadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Keypad: DefineComponent<KeypadProps>;

export default Keypad;
export { Keypad };
