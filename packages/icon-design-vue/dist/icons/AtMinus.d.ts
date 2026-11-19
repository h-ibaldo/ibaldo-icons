import type { DefineComponent } from 'vue';

export interface AtMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtMinus: DefineComponent<AtMinusProps>;

export default AtMinus;
export { AtMinus };
