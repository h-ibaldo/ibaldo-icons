import type { DefineComponent } from 'vue';

export interface BoxPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxPlain: DefineComponent<BoxPlainProps>;

export default BoxPlain;
export { BoxPlain };
