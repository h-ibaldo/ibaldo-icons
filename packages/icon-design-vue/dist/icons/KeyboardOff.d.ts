import type { DefineComponent } from 'vue';

export interface KeyboardOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyboardOff: DefineComponent<KeyboardOffProps>;

export default KeyboardOff;
export { KeyboardOff };
