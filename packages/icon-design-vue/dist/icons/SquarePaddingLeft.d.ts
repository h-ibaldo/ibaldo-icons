import type { DefineComponent } from 'vue';

export interface SquarePaddingLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquarePaddingLeft: DefineComponent<SquarePaddingLeftProps>;

export default SquarePaddingLeft;
export { SquarePaddingLeft };
