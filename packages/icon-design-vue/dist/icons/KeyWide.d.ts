import type { DefineComponent } from 'vue';

export interface KeyWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyWide: DefineComponent<KeyWideProps>;

export default KeyWide;
export { KeyWide };
