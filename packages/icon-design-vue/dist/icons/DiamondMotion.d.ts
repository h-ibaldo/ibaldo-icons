import type { DefineComponent } from 'vue';

export interface DiamondMotionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiamondMotion: DefineComponent<DiamondMotionProps>;

export default DiamondMotion;
export { DiamondMotion };
