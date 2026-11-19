import type { DefineComponent } from 'vue';

export interface KeyBlockSmoothProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyBlockSmooth: DefineComponent<KeyBlockSmoothProps>;

export default KeyBlockSmooth;
export { KeyBlockSmooth };
