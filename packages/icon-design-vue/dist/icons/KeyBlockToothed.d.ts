import type { DefineComponent } from 'vue';

export interface KeyBlockToothedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyBlockToothed: DefineComponent<KeyBlockToothedProps>;

export default KeyBlockToothed;
export { KeyBlockToothed };
