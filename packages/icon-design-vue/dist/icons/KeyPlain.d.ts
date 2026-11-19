import type { DefineComponent } from 'vue';

export interface KeyPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyPlain: DefineComponent<KeyPlainProps>;

export default KeyPlain;
export { KeyPlain };
