import type { DefineComponent } from 'vue';

export interface SquareStackBracketsShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackBracketsShadow: DefineComponent<SquareStackBracketsShadowProps>;

export default SquareStackBracketsShadow;
export { SquareStackBracketsShadow };
