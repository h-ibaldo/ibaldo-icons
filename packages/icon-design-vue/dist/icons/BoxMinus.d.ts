import type { DefineComponent } from 'vue';

export interface BoxMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxMinus: DefineComponent<BoxMinusProps>;

export default BoxMinus;
export { BoxMinus };
