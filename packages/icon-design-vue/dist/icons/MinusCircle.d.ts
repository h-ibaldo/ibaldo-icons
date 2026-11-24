import type { DefineComponent } from 'vue';

export interface MinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinusCircle: DefineComponent<MinusCircleProps>;

export default MinusCircle;
export { MinusCircle };
