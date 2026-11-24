import type { DefineComponent } from 'vue';

export interface MinusSquareLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinusSquareLarge: DefineComponent<MinusSquareLargeProps>;

export default MinusSquareLarge;
export { MinusSquareLarge };
