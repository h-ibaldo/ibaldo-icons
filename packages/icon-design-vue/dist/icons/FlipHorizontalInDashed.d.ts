import type { DefineComponent } from 'vue';

export interface FlipHorizontalInDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipHorizontalInDashed: DefineComponent<FlipHorizontalInDashedProps>;

export default FlipHorizontalInDashed;
export { FlipHorizontalInDashed };
