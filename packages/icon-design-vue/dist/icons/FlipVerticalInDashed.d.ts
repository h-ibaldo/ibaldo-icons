import type { DefineComponent } from 'vue';

export interface FlipVerticalInDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipVerticalInDashed: DefineComponent<FlipVerticalInDashedProps>;

export default FlipVerticalInDashed;
export { FlipVerticalInDashed };
