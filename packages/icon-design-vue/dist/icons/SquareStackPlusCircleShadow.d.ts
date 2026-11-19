import type { DefineComponent } from 'vue';

export interface SquareStackPlusCircleShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusCircleShadow: DefineComponent<SquareStackPlusCircleShadowProps>;

export default SquareStackPlusCircleShadow;
export { SquareStackPlusCircleShadow };
