import type { DefineComponent } from 'vue';

export interface FlipVerticalDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipVerticalDashed: DefineComponent<FlipVerticalDashedProps>;

export default FlipVerticalDashed;
export { FlipVerticalDashed };
