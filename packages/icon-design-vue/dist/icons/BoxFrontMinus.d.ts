import type { DefineComponent } from 'vue';

export interface BoxFrontMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxFrontMinus: DefineComponent<BoxFrontMinusProps>;

export default BoxFrontMinus;
export { BoxFrontMinus };
