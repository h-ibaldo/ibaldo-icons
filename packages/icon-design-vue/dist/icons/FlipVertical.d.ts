import type { DefineComponent } from 'vue';

export interface FlipVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlipVertical: DefineComponent<FlipVerticalProps>;

export default FlipVertical;
export { FlipVertical };
