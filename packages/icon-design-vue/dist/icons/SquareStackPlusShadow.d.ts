import type { DefineComponent } from 'vue';

export interface SquareStackPlusShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusShadow: DefineComponent<SquareStackPlusShadowProps>;

export default SquareStackPlusShadow;
export { SquareStackPlusShadow };
