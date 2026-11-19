import type { DefineComponent } from 'vue';

export interface MinusCircleCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinusCircleCompact: DefineComponent<MinusCircleCompactProps>;

export default MinusCircleCompact;
export { MinusCircleCompact };
