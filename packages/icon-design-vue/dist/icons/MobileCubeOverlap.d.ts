import type { DefineComponent } from 'vue';

export interface MobileCubeOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileCubeOverlap: DefineComponent<MobileCubeOverlapProps>;

export default MobileCubeOverlap;
export { MobileCubeOverlap };
