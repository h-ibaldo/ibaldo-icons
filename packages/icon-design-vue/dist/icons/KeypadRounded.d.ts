import type { DefineComponent } from 'vue';

export interface KeypadRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeypadRounded: DefineComponent<KeypadRoundedProps>;

export default KeypadRounded;
export { KeypadRounded };
