import type { DefineComponent } from 'vue';

export interface MinusCircleLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinusCircleLarge: DefineComponent<MinusCircleLargeProps>;

export default MinusCircleLarge;
export { MinusCircleLarge };
