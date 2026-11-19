import type { DefineComponent } from 'vue';

export interface RadioCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RadioCheck: DefineComponent<RadioCheckProps>;

export default RadioCheck;
export { RadioCheck };
