import type { DefineComponent } from 'vue';

export interface FlipHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipHorizontal: DefineComponent<FlipHorizontalProps>;

export default FlipHorizontal;
export { FlipHorizontal };
