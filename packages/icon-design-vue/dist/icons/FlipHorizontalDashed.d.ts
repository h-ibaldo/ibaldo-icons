import type { DefineComponent } from 'vue';

export interface FlipHorizontalDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipHorizontalDashed: DefineComponent<FlipHorizontalDashedProps>;

export default FlipHorizontalDashed;
export { FlipHorizontalDashed };
