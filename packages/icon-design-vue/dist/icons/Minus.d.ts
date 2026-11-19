import type { DefineComponent } from 'vue';

export interface MinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Minus: DefineComponent<MinusProps>;

export default Minus;
export { Minus };
