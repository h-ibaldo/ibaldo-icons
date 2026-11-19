import type { DefineComponent } from 'vue';

export interface KeyBlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyBlock: DefineComponent<KeyBlockProps>;

export default KeyBlock;
export { KeyBlock };
