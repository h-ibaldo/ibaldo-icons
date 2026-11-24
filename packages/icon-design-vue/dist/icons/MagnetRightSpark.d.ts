import type { DefineComponent } from 'vue';

export interface MagnetRightSparkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MagnetRightSpark: DefineComponent<MagnetRightSparkProps>;

export default MagnetRightSpark;
export { MagnetRightSpark };
