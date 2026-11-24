import type { DefineComponent } from 'vue';

export interface FlipVerticalInProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipVerticalIn: DefineComponent<FlipVerticalInProps>;

export default FlipVerticalIn;
export { FlipVerticalIn };
