import type { DefineComponent } from 'vue';

export interface LassoPointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LassoPointer: DefineComponent<LassoPointerProps>;

export default LassoPointer;
export { LassoPointer };
