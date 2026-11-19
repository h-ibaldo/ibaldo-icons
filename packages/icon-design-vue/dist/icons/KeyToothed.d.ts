import type { DefineComponent } from 'vue';

export interface KeyToothedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyToothed: DefineComponent<KeyToothedProps>;

export default KeyToothed;
export { KeyToothed };
