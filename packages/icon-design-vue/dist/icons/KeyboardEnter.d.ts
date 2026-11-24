import type { DefineComponent } from 'vue';

export interface KeyboardEnterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyboardEnter: DefineComponent<KeyboardEnterProps>;

export default KeyboardEnter;
export { KeyboardEnter };
