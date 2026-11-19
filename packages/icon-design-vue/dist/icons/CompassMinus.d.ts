import type { DefineComponent } from 'vue';

export interface CompassMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassMinus: DefineComponent<CompassMinusProps>;

export default CompassMinus;
export { CompassMinus };
