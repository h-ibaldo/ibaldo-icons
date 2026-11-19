import type { DefineComponent } from 'vue';

export interface DiamondMotionDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiamondMotionDotted: DefineComponent<DiamondMotionDottedProps>;

export default DiamondMotionDotted;
export { DiamondMotionDotted };
