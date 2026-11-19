import type { DefineComponent } from 'vue';

export interface GripDotsHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GripDotsHorizontal: DefineComponent<GripDotsHorizontalProps>;

export default GripDotsHorizontal;
export { GripDotsHorizontal };
