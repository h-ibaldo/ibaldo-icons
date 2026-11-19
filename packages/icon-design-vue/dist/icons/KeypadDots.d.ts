import type { DefineComponent } from 'vue';

export interface KeypadDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeypadDots: DefineComponent<KeypadDotsProps>;

export default KeypadDots;
export { KeypadDots };
