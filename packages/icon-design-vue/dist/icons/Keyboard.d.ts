import type { DefineComponent } from 'vue';

export interface KeyboardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Keyboard: DefineComponent<KeyboardProps>;

export default Keyboard;
export { Keyboard };
