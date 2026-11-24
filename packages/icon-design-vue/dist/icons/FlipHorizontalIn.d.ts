import type { DefineComponent } from 'vue';

export interface FlipHorizontalInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipHorizontalIn: DefineComponent<FlipHorizontalInProps>;

export default FlipHorizontalIn;
export { FlipHorizontalIn };
